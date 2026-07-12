"use client";

import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";

// Case-file style node structure.
interface TracingNode {
  id: string;
  x: number;
  y: number;
  label: string;
  name: string;
  type: string;
  address: string;
  txHash: string;
  timestamp: string;
  amount: string;
  risk: "Low" | "Medium" | "High" | "Critical";
  notes: string;
}

const nodes: TracingNode[] = [
  {
    id: "n1",
    x: 50,
    y: 220,
    label: "0x7fA...c21",
    name: "Source Ledger (Victim)",
    type: "Origin Address",
    address: "0x7fA91d120BdB244D6C4Bc098B1a17De1DCD6ec21",
    txHash: "0x3e18a9fc8218e244d6c4bc098b1a17de1dcd6ec21eb4081c7e098a8342410a512",
    timestamp: "2026-07-11 08:12:44 UTC",
    amount: "48.25 ETH",
    risk: "Low",
    notes: "Initial compromise point. Attacker initiated unauthorized private key access and drained all assets to consolidated transit wallet.",
  },
  {
    id: "n2",
    x: 170,
    y: 110,
    label: "Wallet A",
    name: "Transit Wallet A",
    type: "Transit Address",
    address: "0x5E8a34bCd938e55208f237B129c29377Ad12C9a8",
    txHash: "0xe29b828cd938e55208f237b129c29377ad12c9a8ccf618a82c4819dcf92b8214",
    timestamp: "2026-07-11 08:35:19 UTC",
    amount: "48.24 ETH",
    risk: "Medium",
    notes: "Transit hops split. Funds stayed briefly before being bundled. Intermediate wallet created 2 hours prior to exploit.",
  },
  {
    id: "n3",
    x: 170,
    y: 330,
    label: "0x9bC...e04",
    name: "Secondary Wallet B",
    type: "Transit Address",
    address: "0x9bCc4D20f12A540192A0284e3e3fb1b17a1c7e04",
    txHash: "0x77c2bcd468fdce9e771ad4c098a8342410a5127bcfb38914ba19c2c2cf925ea4",
    timestamp: "2026-07-11 08:44:02 UTC",
    amount: "24.12 ETH",
    risk: "Medium",
    notes: "Static secondary vault holding split transaction amount. Monitored for exchange transfer indications.",
  },
  {
    id: "n4",
    x: 320,
    y: 60,
    label: "Exchange",
    name: "Custodial Deposit",
    type: "Exit Point (Exchange)",
    address: "Binance: Hot Deposit Address",
    txHash: "0xac6f28cf63028af8ccb5dce9e37b2d5677fcbc171d12d488a9283c7deb56af62",
    timestamp: "2026-07-11 09:02:11 UTC",
    amount: "10.00 ETH",
    risk: "High",
    notes: "Traced to verified exchange KYC-associated deposit address. Freezing request documents prepared for prompt exchange compliance action.",
  },
  {
    id: "n5",
    x: 330,
    y: 200,
    label: "Mixer",
    name: "Privacy Protocol Contract",
    type: "Obfuscation Point",
    address: "Tornado.Cash: 10 ETH Pool",
    txHash: "0x4b78c9d8a2fbaa12bc7777777777777777777777777777777777777777777777",
    timestamp: "2026-07-11 09:15:30 UTC",
    amount: "38.00 ETH",
    risk: "Critical",
    notes: "Obfuscation layer. Analysis resolved deposit/withdrawal size matching, recovering path continuity to attacker consolidation wallet.",
  },
  {
    id: "n6",
    x: 310,
    y: 370,
    label: "0x1aD...77f",
    name: "Idle Intermediate C",
    type: "Transit Address",
    address: "0x1aDd4685ffB1349Ac082fBbc5DCE9e37b2d5677f",
    txHash: "0xfb38914ba19c2c2cf925ea46f28cfb092837bc21eb81cf92fb821415f18cde27b",
    timestamp: "2026-07-11 09:30:05 UTC",
    amount: "14.12 ETH",
    risk: "Medium",
    notes: "Consolidation buffer holding static assets. Monitored for outbound withdrawal activity.",
  },
  {
    id: "n7",
    x: 490,
    y: 130,
    label: "Wallet B",
    name: "Control Endpoint",
    type: "Attacker Controlled Address",
    address: "0xD8a729c1Bfde2A947A3eCdc912a76f2De6A96C2Ef",
    txHash: "0x58c199ac2b3cde27ba0d28ba8342410a51277fbc21eb81cf92fb821415f18a38c",
    timestamp: "2026-07-11 11:22:15 UTC",
    amount: "37.95 ETH",
    risk: "Critical",
    notes: "Destination wallet identified as attacker-controlled. Correlated exit paths verify direct link back to Mixer contract outputs.",
  },
  {
    id: "n8",
    x: 500,
    y: 310,
    label: "Cold Storage",
    name: "Hardware Wallet Storage",
    type: "Idle Storage",
    address: "0x918aCbDeEf092837B1dD120De4488A9283c7deB56",
    txHash: "0x28af8ccb5dce9e37b2d5677fcbc171d12d488a9283c7deb56cdec2cf925e0192a",
    timestamp: "2026-07-11 11:45:00 UTC",
    amount: "14.10 ETH",
    risk: "Medium",
    notes: "Funds transferred into offline custody. Monitored for active sign-offs or movement to fiat transition gateways.",
  },
];

const backgroundEdges: [string, string][] = [
  ["n1", "n3"],
  ["n3", "n6"],
  ["n2", "n4"],
  ["n5", "n6"],
  ["n5", "n8"],
];

const highlightPath: string[] = ["n1", "n2", "n5", "n7"];

function getNode(id: string) {
  return nodes.find((n) => n.id === id)!;
}

export default function TracePath() {
  const [selectedId, setSelectedId] = useState<string>("n1");
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  const shouldReduceMotion = useReducedMotion();
  const animateTransitions = mounted && !shouldReduceMotion;

  useEffect(() => {
    setMounted(true);
  }, []);

  const activeNode = getNode(selectedId);

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Interactive Case Visual Schema */}
      <div 
        className="relative aspect-[560/400] w-full border border-ink/10 rounded-sm bg-steel/[0.02] p-4 overflow-hidden select-none"
        aria-label="Interactive transaction tracing path diagram. Select nodes to inspect forensic details."
      >
        {/* Background Grid Lines to evoke case-file graph paper */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(42,51,66,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(42,51,66,0.03)_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none" />

        <svg
          viewBox="0 0 560 400"
          className="w-full h-full relative z-10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Quiet background network */}
          {backgroundEdges.map(([a, b], i) => {
            const na = getNode(a);
            const nb = getNode(b);
            return (
              <line
                key={`bg-edge-${i}`}
                x1={na.x}
                y1={na.y}
                x2={nb.x}
                y2={nb.y}
                stroke="#8B96A8"
                strokeOpacity={0.2}
                strokeWidth={1}
              />
            );
          })}

          {/* Highlighted traced path — animated draw-on */}
          {highlightPath.slice(0, -1).map((id, i) => {
            const a = getNode(id);
            const b = getNode(highlightPath[i + 1]);
            const isPathActive =
              (selectedId === id && selectedId === highlightPath[i + 1]) ||
              (highlightPath.indexOf(selectedId) >= i && highlightPath.indexOf(selectedId) >= i + 1);

            return (
              <motion.line
                key={`hl-edge-${i}`}
                x1={a.x}
                y1={a.y}
                x2={b.x}
                y2={b.y}
                stroke={isPathActive ? "#C9A15A" : "#8B96A8"}
                strokeOpacity={isPathActive ? 1 : 0.4}
                strokeWidth={isPathActive ? 2 : 1.25}
                initial={animateTransitions ? { pathLength: 0, opacity: 0 } : { pathLength: 1, opacity: 1 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                  duration: 0.9,
                  delay: i * 0.25,
                  ease: "easeInOut",
                }}
              />
            );
          })}

          {/* Render Background Nodes */}
          {nodes
            .filter((n) => !highlightPath.includes(n.id))
            .map((n) => {
              const isSelected = selectedId === n.id;
              const isHovered = hoveredId === n.id;
              return (
                <g
                  key={n.id}
                  className="cursor-pointer focus:outline-none"
                  role="button"
                  tabIndex={0}
                  onClick={() => setSelectedId(n.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setSelectedId(n.id);
                    }
                  }}
                  onMouseEnter={() => setHoveredId(n.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  aria-label={`Inspect ${n.name}`}
                >
                  {/* Outer selection ring */}
                  {(isSelected || isHovered) && (
                    <circle
                      cx={n.x}
                      cy={n.y}
                      r={9}
                      fill="transparent"
                      stroke="#8B96A8"
                      strokeWidth={1}
                      strokeDasharray="2 2"
                    />
                  )}
                  <circle
                    cx={n.x}
                    cy={n.y}
                    r={isSelected ? 5.5 : 4}
                    fill={isSelected ? "#12151C" : "#8B96A8"}
                    stroke={isSelected ? "#8B96A8" : "transparent"}
                    strokeWidth={1.5}
                    className="transition-all duration-200"
                  />
                  <text
                    x={n.x}
                    y={n.y - 12}
                    textAnchor="middle"
                    className="font-mono select-none"
                    fontSize={10}
                    fill={isSelected ? "#12151C" : "#8B96A8"}
                    fillOpacity={isSelected ? 1 : 0.6}
                  >
                    {n.label}
                  </text>
                </g>
              );
            })}

          {/* Render Highlighted Nodes on the Trace Path */}
          {highlightPath.map((id, i) => {
            const n = getNode(id);
            const isSelected = selectedId === id;
            const isHovered = hoveredId === id;
            return (
              <motion.g
                key={id}
                className="cursor-pointer focus:outline-none"
                role="button"
                tabIndex={0}
                initial={animateTransitions ? { opacity: 0, scale: 0.5 } : { opacity: 1, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, delay: 0.15 + i * 0.25 }}
                onClick={() => setSelectedId(id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedId(id);
                  }
                }}
                onMouseEnter={() => setHoveredId(id)}
                onMouseLeave={() => setHoveredId(null)}
                aria-label={`Inspect ${n.name}`}
              >
                {/* Outer dynamic status ring */}
                {(isSelected || isHovered) && (
                  <motion.circle
                    cx={n.x}
                    cy={n.y}
                    r={11}
                    fill="transparent"
                    stroke="#C9A15A"
                    strokeWidth={1}
                    className="pointer-events-none"
                    initial={animateTransitions ? { scale: 0.8, opacity: 0 } : false}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
                {/* Core node circle */}
                <circle
                  cx={n.x}
                  cy={n.y}
                  r={isSelected ? 6.5 : 5.5}
                  fill="#12151C"
                  stroke="#C9A15A"
                  strokeWidth={isSelected ? 2 : 1.5}
                  className="transition-all duration-200"
                />
                <text
                  x={n.x}
                  y={n.y - 14}
                  textAnchor="middle"
                  className="font-mono font-medium select-none"
                  fontSize={10}
                  fill={isSelected ? "#12151C" : "#2A3342"}
                >
                  {n.label}
                </text>
              </motion.g>
            );
          })}
        </svg>

        {/* Floating Instruction */}
        <div className="absolute bottom-3 left-4 text-[10px] uppercase tracking-wider text-steel/60 font-mono">
          [Click nodes to trace ledger evidence]
        </div>
      </div>

      {/* Forensic Report Docket Details Panel */}
      <div 
        className="bg-ink text-paper border border-ink/10 rounded-sm p-6 relative overflow-hidden"
        role="region"
        aria-live="polite"
        aria-label="Forensic Node Details"
      >
        {/* Subtle decorative brass top line */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-brass/80" />
        
        {/* Background Grid Pattern in details card */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(247,246,243,0.015)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none" />

        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-paper/10 pb-4 mb-4 relative z-10">
          <div>
            <span className="text-[10px] tracking-[0.2em] uppercase font-mono text-brass">
              Ledger Audit Docket // CASE #4081-TX
            </span>
            <h4 className="font-display text-lg font-semibold text-paper mt-1">
              {activeNode.name}
            </h4>
          </div>
          <span 
            className={`text-[10px] tracking-wider uppercase font-mono px-2.5 py-0.5 rounded-sm border ${
              activeNode.risk === "Critical" 
                ? "bg-red-500/10 border-red-500/30 text-red-400" 
                : activeNode.risk === "High"
                ? "bg-orange-500/10 border-orange-500/30 text-orange-400"
                : "bg-brass/10 border-brass/30 text-brass"
            }`}
          >
            Risk: {activeNode.risk}
          </span>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 text-xs font-mono relative z-10">
          <div>
            <div className="text-paper/40 text-[10px] uppercase tracking-wider mb-0.5">
              Node Classification
            </div>
            <div className="text-paper/95">{activeNode.type}</div>
          </div>

          <div>
            <div className="text-paper/40 text-[10px] uppercase tracking-wider mb-0.5">
              Transfer Amount
            </div>
            <div className="text-brass font-medium">{activeNode.amount}</div>
          </div>

          <div className="sm:col-span-2">
            <div className="text-paper/40 text-[10px] uppercase tracking-wider mb-0.5">
              Entity or Address Path
            </div>
            <div className="text-paper/90 select-all break-all bg-paper/5 px-2 py-1 rounded-sm mt-1">
              {activeNode.address}
            </div>
          </div>

          <div className="sm:col-span-2">
            <div className="text-paper/40 text-[10px] uppercase tracking-wider mb-0.5">
              Associated Transaction Hash
            </div>
            <div className="text-paper/80 select-all break-all bg-paper/5 px-2 py-1 rounded-sm mt-1">
              {activeNode.txHash}
            </div>
          </div>

          <div>
            <div className="text-paper/40 text-[10px] uppercase tracking-wider mb-0.5">
              Block Timestamp
            </div>
            <div className="text-paper/90">{activeNode.timestamp}</div>
          </div>

          <div>
            <div className="text-paper/40 text-[10px] uppercase tracking-wider mb-0.5">
              Audit Status
            </div>
            <div className="text-brass flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-brass animate-pulse" />
              VERIFIED RECORD
            </div>
          </div>
        </div>

        <div className="mt-5 border-t border-paper/10 pt-4 text-xs leading-relaxed text-paper/60 font-sans relative z-10">
          <strong className="text-paper/90 block mb-1 font-display text-[13px] font-semibold font-serif">
            Analysis Findings & Notes
          </strong>
          {activeNode.notes}
        </div>
      </div>
    </div>
  );
}

