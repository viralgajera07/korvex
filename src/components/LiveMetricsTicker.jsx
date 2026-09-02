export function LiveMetricsTicker() {
  const agencyFeatures = [
    { icon: '⚡', label: 'Sub-Second Load Speed', val: '< 0.4s' },
    { icon: '🏆', label: 'Core Web Vitals Score', val: '99/100' },
    { icon: '🎯', label: 'High-Converting Funnels', val: '4.2x ROAS' },
    { icon: '🚀', label: 'On-Time Project Delivery', val: '100%' },
    { icon: '🔒', label: 'Enterprise SSL & Security', val: 'Bank-Grade' },
    { icon: '💎', label: 'Client Retention Rate', val: '98.5%' },
  ];

  return (
    <div className="agency-trust-banner-section">
      <div className="trust-banner-wrapper">
        <div className="trust-banner-track">
          {agencyFeatures.concat(agencyFeatures).map((item, index) => (
            <div key={`${item.label}-${index}`} className="trust-badge-pill">
              <span className="trust-badge-icon">{item.icon}</span>
              <span className="trust-badge-label">{item.label}</span>
              <span className="trust-badge-val">{item.val}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
