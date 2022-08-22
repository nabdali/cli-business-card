#!/usr/bin/env node

import boxen from "boxen";
import chalk from "chalk";

const boxenOptions = {
  padding: 1,
  width: 54,
  title: "Nabdali",
  titleAlignment: "center",
  borderStyle: "round",
  borderColor: "#03f4fc",
};

const intro = chalk.bold(
  `Hi, my name is Abdelali but everybody calls me ${chalk.green.bold.bgBlue("Ali")}, I'm a ${chalk.cyan("fullstack software developer")}, making hiking and software it's my favorite hobbies, also I learn ${chalk.cyan("piano")} and ${chalk.cyan("DevOps")} practices.\n\n`
);

const links = [
  { name: chalk.hex("#fff").bgHex("#0f111a")("Website"), url: "   https://nabdali.com" },
  { name: chalk.hex("#fff").bgHex("#6e5494")("GitHub"), url: "    https://github.com/nabdali" },
  { name: chalk.hex("#fff").bgHex("#582be8")("Polywork"), url: "  https://polywork.com/nabdali" },
  { name: chalk.hex("#fff").bgHex("#1DA1F2")("Twitter"), url: "   https://twitter.com/nabda101010" },
];

const linkList = links.map((link) => `${link.name} ${link.url}`).join("\n");

console.log(boxen(intro + linkList, boxenOptions));

