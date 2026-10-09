const fs = require("fs");
const p = "C:/Users/TA1xPCs/Documents/Codex/rov/web/rov-aov-tier-list.html";
let html = fs.readFileSync(p, "utf8");
if (html.includes("const els = {")) {
  console.log(JSON.stringify({ inserted: false, reason: "els already exists" }));
  process.exit(0);
}
const marker = "      let heroes = makeHeroesFromFiles(HERO_FILES);";
const elsBlock = `      const els = {
        tierRows: document.getElementById("tierRows"),
        poolList: document.getElementById("poolList"),
        heroPool: document.getElementById("heroPool"),
        poolCount: document.getElementById("poolCount"),
        searchInput: document.getElementById("searchInput"),
        addTierBtn: document.getElementById("addTierBtn"),
        undoBtn: document.getElementById("undoBtn"),
        redoBtn: document.getElementById("redoBtn"),
        resetBtn: document.getElementById("resetBtn"),
        exportBtn: document.getElementById("exportBtn"),
        contextMenu: document.getElementById("contextMenu"),
        toast: document.getElementById("toast"),
        exportArea: document.getElementById("exportArea"),
        navButtons: document.querySelectorAll(".nav-btn"),
        views: document.querySelectorAll(".view"),
        draftPoolList: document.getElementById("draftPoolList"),
        draftPoolCount: document.getElementById("draftPoolCount"),
        draftSearchInput: document.getElementById("draftSearchInput"),
        redBanSlots: document.getElementById("redBanSlots"),
        redPickSlots: document.getElementById("redPickSlots"),
        blueBanSlots: document.getElementById("blueBanSlots"),
        bluePickSlots: document.getElementById("bluePickSlots"),
        draftUndoBtn: document.getElementById("draftUndoBtn"),
        draftRedoBtn: document.getElementById("draftRedoBtn"),
        draftResetBtn: document.getElementById("draftResetBtn"),
        mapStage: document.getElementById("mapStage"),
        mapResetBtn: document.getElementById("mapResetBtn"),
        appShell: document.querySelector(".app-shell"),
        tierLayout: document.querySelector("#tierView .layout"),
        sidebarToggle: document.getElementById("sidebarToggle"),
        poolToggle: document.getElementById("poolToggle"),
        laneFilters: document.getElementById("laneFilters"),
        laneFilterButtons: document.querySelectorAll(".lane-filter"),
        setNameInput: document.getElementById("setNameInput"),
        setSelect: document.getElementById("setSelect"),
        saveSetBtn: document.getElementById("saveSetBtn"),
        loadSetBtn: document.getElementById("loadSetBtn"),
        deleteSetBtn: document.getElementById("deleteSetBtn"),
      };

`;
if (!html.includes(marker)) throw new Error("marker not found");
html = html.replace(marker, elsBlock + marker);
fs.writeFileSync(p, html, "utf8");
console.log(JSON.stringify({ inserted: true, bytes: Buffer.byteLength(html, "utf8") }));
