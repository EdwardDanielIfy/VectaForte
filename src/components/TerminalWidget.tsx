"use client";

import { useState, useEffect, useRef } from "react";

const SIMULATED_LOGS = [
  { type: "scanner", text: "Initializing digital forensics block scanner v1.4..." },
  { type: "scanner", text: "Connecting to ledger nodes: Ethereum, Bitcoin, Solana, SWIFT..." },
  { type: "info", text: "Ledger status: Connected (100% block coverage)." },
  { type: "warning", text: "Scan triggered: Address clustering query initiated on TxHash 0x9f4a...dc63" },
  { type: "trace", text: "Attributing Hop 1: Wallet address 0xef23...c938 -> Smart Contract #0421" },
  { type: "trace", text: "Attributing Hop 2: Router contract -> Cross-chain Liquidity Bridge (Arbitrum)" },
  { type: "trace", text: "Attributing Hop 3: Bridge transfer -> Binance transit wallet #882b" },
  { type: "info", text: "Routing node match: Transit coordinates point to KYC-Verified account ID bin-55938" },
  { type: "success", text: "ATTRIBUTION LOGGED: 98.4% tracing path validated. Sourced to block #21,804,112." },
  { type: "scanner", text: "Awaiting next ledger event or user search inquiry..." },
  { type: "warning", text: "Scan triggered: Analyzing ledger records for Swift Ledger Ref 502-ERR-99" },
  { type: "trace", text: "Wire Intercept: Bank routing log points to transit intermediary platform" },
  { type: "info", text: "Exchange Liaison contact packet generated for account freeze request." },
  { type: "success", text: "CASE FILE GENERATED: Documentation complete. CaseDocket ref: VECTA-884021" },
];

export default function TerminalWidget() {
  const [logs, setLogs] = useState<string[]>([]);
  const [isScanning, setIsScanning] = useState(true);
  const [scanSpeed, setScanSpeed] = useState(1800);
  const logIndexRef = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initial logs load instantly
    setLogs([SIMULATED_LOGS[0].text, SIMULATED_LOGS[1].text, SIMULATED_LOGS[2].text]);
    logIndexRef.current = 3;
  }, []);

  useEffect(() => {
    if (!isScanning) return;

    const interval = setInterval(() => {
      if (logIndexRef.current >= SIMULATED_LOGS.length) {
        logIndexRef.current = 3; // loop trace section
      }
      const nextLog = SIMULATED_LOGS[logIndexRef.current];
      setLogs((prev) => [...prev.slice(-15), nextLog.text]); // limit history size to 15 logs
      logIndexRef.current += 1;
    }, scanSpeed);

    return () => clearInterval(interval);
  }, [isScanning, scanSpeed]);

  useEffect(() => {
    // Scroll to bottom
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [logs]);

  function handleTriggerScan() {
    setIsScanning((prev) => !prev);
  }

  function handleClear() {
    setLogs([SIMULATED_LOGS[0].text]);
    logIndexRef.current = 1;
  }

  return (
    <div className="relative border border-brass/25 rounded-md bg-[#0a0c16] shadow-lg shadow-black/80 font-mono text-xs overflow-hidden h-[330px] flex flex-col">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#121422] border-b border-[#1c1e34] select-none">
        <div className="flex items-center gap-2">
          {/* Mac-style circle dots */}
          <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#eab308]/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e]/70" />
        </div>
        <span className="text-[10px] tracking-widest text-slate uppercase select-none">
          vectaforte_tracer_node_console
        </span>
        <div className="flex items-center gap-1.5">
          <span className={`w-1.5 h-1.5 rounded-full ${isScanning ? "bg-green-500 animate-pulse" : "bg-red-500"}`} />
          <span className="text-[9px] text-[#93a1b8]">{isScanning ? "SCAN STACK ACTIVE" : "SCAN PAUSED"}</span>
        </div>
      </div>

      {/* Terminal Content Screen */}
      <div 
        ref={containerRef}
        className="flex-1 p-4 overflow-y-auto space-y-2 scroller scroll-smooth leading-relaxed text-[#93a1b8]"
      >
        {logs.map((log, idx) => {
          let prefixColor = "text-brass";
          if (log.includes("ATTRIBUTION") || log.includes("CASE FILE")) prefixColor = "text-green-400 font-semibold";
          if (log.includes("Scan triggered:") || log.includes("warning")) prefixColor = "text-amber-500";
          
          return (
            <div key={idx} className="flex gap-2.5 items-start">
              <span className={`select-none ${prefixColor}`}>$</span>
              <span className={log.includes("ATTRIBUTION") ? "text-green-400 font-semibold" : ""}>{log}</span>
            </div>
          );
        })}
        {isScanning && (
          <div className="flex gap-2.5 items-center text-brass font-bold animate-pulse">
            <span>$</span>
            <span className="h-3 w-1.5 bg-brass animate-blink" />
          </div>
        )}
      </div>

      {/* Terminal Controls Bar */}
      <div className="px-4 py-2 border-t border-[#1c1e34] bg-[#0e101d] flex flex-wrap gap-2 items-center justify-between">
        <div className="flex gap-2">
          <button 
            type="button" 
            onClick={handleTriggerScan}
            className="text-[10px] uppercase font-bold tracking-wider px-3 py-1.5 rounded-sm border border-brass/40 text-brass hover:bg-brass hover:text-[#07080f] transition-all cursor-pointer"
          >
            {isScanning ? "Pause Scan" : "Resume Live Tracing"}
          </button>
          <button 
            type="button"
            onClick={handleClear}
            className="text-[10px] uppercase font-bold tracking-wider px-3 py-1.5 rounded-sm border border-slate/40 text-slate hover:bg-slate hover:text-[#07080f] transition-all cursor-pointer"
          >
            Clear Screen
          </button>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[9px] text-[#93a1b8]/60 uppercase">Speed:</span>
          <select 
            value={scanSpeed} 
            onChange={(e) => setScanSpeed(Number(e.target.value))}
            className="bg-[#121422] border border-[#1c1e34] rounded-sm text-[10px] text-brass py-0.5 px-2 outline-none"
          >
            <option value={1000}>Fast (1.0s)</option>
            <option value={1800}>Normal (1.8s)</option>
            <option value={3000}>Slow (3.0s)</option>
          </select>
        </div>
      </div>
    </div>
  );
}
