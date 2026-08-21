export function LiveMetricsTicker() {
  const tickerItems = [
    { label: 'Avg Load Time', val: '< 0.4s' },
    { label: 'Client Retention Rate', val: '98.5%' },
    { label: 'Average ROAS on Meta & Google Ads', val: '4.2x+' },
    { label: 'Google Core Web Vitals Score', val: '99/100' },
    { label: 'Projects Delivered On Time', val: '100%' },
    { label: 'Total Revenue Generated for Clients', val: '$12.4M+' },
  ];

  return (
    <div className="metrics-ticker-section">
      <div className="ticker-track">
        <div className="ticker-content">
          {tickerItems.concat(tickerItems).map((item, index) => (
            <div key={`${item.label}-${index}`} className="ticker-item">
              <span className="ticker-dot"></span>
              <span className="ticker-label">{item.label}:</span>
              <strong className="ticker-val">{item.val}</strong>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
