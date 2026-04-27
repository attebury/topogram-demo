import fs from "node:fs";

function parseArgs(argv) {
  const options = {
    inputPath: null,
    mode: "summary"
  };

  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];
    if (token === "--input") {
      options.inputPath = argv[index + 1];
      index += 1;
    } else if (token === "--mode") {
      options.mode = argv[index + 1];
      index += 1;
    } else {
      throw new Error(`Unknown argument: ${token}`);
    }
  }

  if (!options.inputPath) {
    throw new Error("Expected --input <path>");
  }

  if (!["summary", "issue"].includes(options.mode)) {
    throw new Error(`Expected --mode summary|issue, received ${options.mode}`);
  }

  return options;
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function staleTargets(report) {
  return (report.assessed_targets || []).filter((target) => target.freshness_state === "stale");
}

function rerunCommand(target) {
  return `node ./ops/rerun-imported-target.mjs ${target.slug} --topogram-repo ../topogram --target-root /tmp/topogram-demo-${target.slug}-refresh`;
}

function receiptCommand(target) {
  return `node ./ops/capture-verification-receipt.mjs ${target.slug} --topogram-repo ../topogram --rerun-root /tmp/topogram-demo-${target.slug}-refresh`;
}

function syncSourceCommand(target) {
  return `rsync -a --delete --exclude topogram /tmp/topogram-demo-${target.slug}-refresh/ ./examples/imported/${target.slug}/source/`;
}

function syncTopogramCommand(target) {
  return `rsync -a --delete /tmp/topogram-demo-${target.slug}-refresh/topogram/ ./examples/imported/${target.slug}/topogram/`;
}

function refreshCommand(target) {
  return `node ./ops/refresh-proof-status-metadata.mjs --topogram-repo ../topogram ${target.slug}`;
}

function renderTargetList(targets) {
  return targets.map((target) => {
    const reasons = target.stale_reasons?.length ? `: ${target.stale_reasons.join("; ")}` : "";
    return `- \`${target.slug}\`${reasons}`;
  });
}

function renderTargetCommands(targets) {
  const lines = [];
  for (const target of targets) {
    lines.push(`- \`${target.slug}\``);
    lines.push("");
    lines.push("  ```bash");
    lines.push(`  ${rerunCommand(target)}`);
    lines.push(`  ${receiptCommand(target)}`);
    lines.push(`  ${syncSourceCommand(target)}`);
    lines.push(`  ${syncTopogramCommand(target)}`);
    lines.push(`  ${refreshCommand(target)}`);
    lines.push("  ```");
    lines.push("");
  }
  if (lines.at(-1) === "") {
    lines.pop();
  }
  return lines;
}

function renderSummary(report) {
  const stale = staleTargets(report);
  const lines = ["## Imported claim freshness"];

  if (report.workflow_error) {
    lines.push("");
    lines.push(`Freshness check failed before producing a normal report: ${report.workflow_error}`);
    return `${lines.join("\n")}\n`;
  }

  lines.push("");
  lines.push(`- Checked at: \`${report.checked_at}\``);
  lines.push(`- Scope: \`${report.scope || "active_inventory"}\``);
  if (Array.isArray(report.selected_slugs) && report.selected_slugs.length > 0) {
    lines.push(`- Selected targets: ${report.selected_slugs.map((slug) => `\`${slug}\``).join(", ")}`);
  }
  lines.push(`- Active claims assessed: \`${report.assessed_targets.length}\``);
  lines.push(`- Stale claims: \`${report.stale_target_count}\``);

  if (stale.length === 0) {
    lines.push("");
    lines.push("All active imported claims are freshness-current.");
    return `${lines.join("\n")}\n`;
  }

  lines.push("");
  lines.push("Stale imported claims:");
  lines.push(...renderTargetList(stale));
  lines.push("");
  lines.push("Suggested rerun commands:");
  lines.push(...renderTargetCommands(stale));

  return `${lines.join("\n")}\n`;
}

function renderIssue(report) {
  const stale = staleTargets(report);
  const lines = [
    "# Imported proof freshness drift",
    "",
    `Detected by the automated freshness workflow on \`${report.checked_at}\`.`
  ];

  if (report.workflow_error) {
    lines.push("");
    lines.push(`The freshness job failed before producing a normal report: ${report.workflow_error}`);
    lines.push("");
    lines.push("Action:");
    lines.push("- inspect the failing workflow run");
    lines.push("- repair the freshness job before trusting the imported claim set");
    return `${lines.join("\n")}\n`;
  }

  lines.push("");
  lines.push(`Scope: \`${report.scope || "active_inventory"}\``);
  if (Array.isArray(report.selected_slugs) && report.selected_slugs.length > 0) {
    lines.push(`Selected targets: ${report.selected_slugs.map((slug) => `\`${slug}\``).join(", ")}`);
    lines.push("");
  }
  lines.push(`Stale active claims: \`${report.stale_target_count}\``);

  if (stale.length > 0) {
    lines.push("");
    lines.push("Targets needing refresh:");
    lines.push(...renderTargetList(stale));
    lines.push("");
    lines.push("Run these reruns first:");
    lines.push(...renderTargetCommands(stale));
  }

  lines.push("");
  lines.push("Required action:");
  lines.push("- rerun the affected imported targets against current `topogram/main`");
  lines.push("- capture fresh verification receipts");
  lines.push("- refresh `proof-status.json` and `rerun-manifest.json` from those reruns");
  lines.push("- confirm `node ./ops/verify-imported-targets.mjs` and `node ./ops/claim-freshness.mjs --topogram-repo ../topogram` both pass");

  return `${lines.join("\n")}\n`;
}

function main() {
  const options = parseArgs(process.argv.slice(2));
  const report = readJson(options.inputPath);
  const markdown = options.mode === "issue" ? renderIssue(report) : renderSummary(report);
  process.stdout.write(markdown);
}

main();
