// Grafo de tecnologías: cada línea une tecnologías que usé juntas en un mismo proyecto.
const nodes = [
  { id: 'React', x: 60, y: 50 },
  { id: 'Node.js', x: 170, y: 30 },
  { id: 'MongoDB', x: 270, y: 75 },
  { id: 'Java', x: 40, y: 165 },
  { id: 'Spring Boot', x: 140, y: 130 },
  { id: 'Neo4j', x: 250, y: 175 },
  { id: 'Python', x: 120, y: 240 },
  { id: 'SQL', x: 30, y: 285 },
  { id: 'Docker', x: 260, y: 270 },
]

const edges = [
  ['React', 'Node.js'],
  ['Node.js', 'MongoDB'],
  ['Java', 'Spring Boot'],
  ['Spring Boot', 'Neo4j'],
  ['Python', 'Neo4j'],
  ['Python', 'MongoDB'],
  ['Python', 'SQL'],
  ['Python', 'Docker'],
  ['Neo4j', 'Docker'],
]

const pos = Object.fromEntries(nodes.map((n) => [n.id, n]))

export default function StackGraph() {
  return (
    <svg
      viewBox="0 0 370 320"
      className="h-auto w-full max-w-[380px]"
      role="img"
      aria-label="Grafo de las tecnologías que usé en mis proyectos"
    >
      {edges.map(([a, b], i) => (
        <line
          key={`${a}-${b}`}
          x1={pos[a].x}
          y1={pos[a].y}
          x2={pos[b].x}
          y2={pos[b].y}
          className="edge"
          stroke="var(--line)"
          strokeWidth="1.5"
          style={{ animationDelay: `${0.25 + i * 0.08}s` }}
        />
      ))}
      {nodes.map((n, i) => (
        <g key={n.id} className="node" style={{ animationDelay: `${i * 0.06}s` }}>
          <circle cx={n.x} cy={n.y} r="5" fill="var(--accent)" />
          <circle cx={n.x} cy={n.y} r="10" fill="none" stroke="var(--accent)" strokeOpacity="0.25" />
          <text
            x={n.x + 14}
            y={n.y + 4}
            fontSize="12.5"
            fontWeight="500"
            fill="var(--ink)"
            fontFamily="inherit"
          >
            {n.id}
          </text>
        </g>
      ))}
    </svg>
  )
}
