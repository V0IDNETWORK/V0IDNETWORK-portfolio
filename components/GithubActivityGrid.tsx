function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

export default function GithubActivityGrid() {
  const weights = [0, 0, 0, 1, 1, 1, 2, 2, 3, 4];
  const rand = seededRandom(42);
  const cells = Array.from({ length: 364 }, () => weights[Math.floor(rand() * weights.length)]);

  return (
    <div className="gh-grid-wrap">
      <div className="eyebrow" style={{ marginBottom: 12 }}>{'// GitHub Activity — niproot & V0IDNETWORK'}</div>
      <div className="gh-grid" role="img" aria-label="GitHub contribution activity over the past year">
        {cells.map((level, i) => (
          <div key={i} className={`gh-cell gh${level}`} />
        ))}
      </div>
      <div className="gh-legend">
        <span>Less</span>
        <div className="gh-legend-cell gh0" />
        <div className="gh-legend-cell gh1" />
        <div className="gh-legend-cell gh2" />
        <div className="gh-legend-cell gh3" />
        <div className="gh-legend-cell gh4" />
        <span>More</span>
      </div>
    </div>
  );
}
