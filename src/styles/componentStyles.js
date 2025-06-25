export const styles = {
  AppsAppsAppsAppsAppsContainer: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
    fontSize: '16px',
    lineHeight: '1.6',
    fontWeight: 300,
    color: '#333',
    margin: 0,
    padding: 0
  },

  heroSection: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '60px 40px',
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    textAlign: 'center'
  },

  heroContent: {
    maxWidth: '800px',
    width: '100%'
  },

  heroTitle: {
    fontSize: '3.5rem',
    fontWeight: 700,
    marginBottom: '1.5rem',
    letterSpacing: '-0.02em',
    background: 'linear-gradient(45deg, #fff, #e0e7ff)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  },

  heroDescription: {
    fontSize: '1.25rem',
    marginBottom: '1rem',
    opacity: 0.9,
    lineHeight: '1.7'
  },

  heroSubtext: {
    fontSize: '1rem',
    marginBottom: '2.5rem',
    opacity: 0.8
  },

  scrollButton: {
    padding: '16px 32px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
    fontSize: '18px',
    fontWeight: 600,
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: '0 8px 32px rgba(0, 123, 255, 0.3)',
    outline: 'none'
  },

  scrollIndicator: {
    marginTop: '4rem',
    opacity: 0.7
  },

  scrollText: {
    fontSize: '1rem',
    marginBottom: '0.5rem'
  },

  scrollArrow: {
    fontSize: '2rem',
    animation: 'bounce 2s infinite'
  },

  scrollAppsAppsAppsAppsAppsContainer: {
    width: '500%',
    height: '100vh',
    display: 'flex',
    flexWrap: 'nowrap'
  },

  section: {
    width: '20%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    position: 'relative'
  },

  sectionContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '60px',
    width: '100%',
    maxWidth: '1000px',
    gap: '40px'
  },

  contentWrapper: {
    flex: 1,
    maxWidth: '600px'
  },

  sectionTitle: {
    fontSize: '2.5rem',
    fontWeight: 600,
    marginBottom: '1rem',
    textAlign: 'center'
  },

  sectionText: {
    fontSize: '1.5rem',
    textAlign: 'center',
    opacity: 0.9
  },

  codeBlock: {
    backgroundColor: '#1a1a1a',
    color: '#e6e6e6',
    padding: '24px',
    borderRadius: '12px',
    fontSize: '14px',
    lineHeight: '1.5',
    marginBottom: '20px',
    fontFamily: '"SF Mono", Monaco, "Inconsolata", "Roboto Mono", Consolas, monospace',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    overflow: 'auto'
  },

  sectionDescription: {
    fontSize: '1.1rem',
    opacity: 0.9,
    lineHeight: '1.6'
  },

  animatedBox: {
    width: '120px',
    height: '100px',
    backgroundColor: 'white',
    color: '#333',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '12px',
    fontWeight: 600,
    fontSize: '16px',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
    willChange: 'transform',
    cursor: 'pointer'
  },

  boxLabel: {
    textAlign: 'center'
  },

  footerSection: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '80px 40px',
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
    color: '#333'
  },

  footerContent: {
    maxWidth: '900px',
    width: '100%',
    textAlign: 'center'
  },

  footerTitle: {
    fontSize: '2.5rem',
    fontWeight: 700,
    marginBottom: '1.5rem',
    color: '#2c3e50'
  },

  footerText: {
    fontSize: '1.25rem',
    marginBottom: '3rem',
    opacity: 0.8,
    lineHeight: '1.7'
  },

  caveatsSection: {
    textAlign: 'left',
    backgroundColor: 'white',
    padding: '40px',
    borderRadius: '16px',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
    border: '1px solid rgba(0, 0, 0, 0.05)'
  },

  caveatsTitle: {
    fontSize: '1.5rem',
    fontWeight: 600,
    marginBottom: '1.5rem',
    color: '#2c3e50'
  },

  caveatsList: {
    listStyle: 'none',
    padding: 0
  },

  caveatItem: {
    fontSize: '1rem',
    marginBottom: '1rem',
    lineHeight: '1.6',
    paddingLeft: '1.5rem',
    position: 'relative',
    '&::before': {
      content: '•',
      color: '#007bff',
      fontWeight: 'bold',
      position: 'absolute',
      left: 0
    }
  },

  inlineCode: {
    backgroundColor: '#f8f9fa',
    color: '#e83e8c',
    padding: '2px 6px',
    borderRadius: '4px',
    fontSize: '0.9em',
    fontFamily: '"SF Mono", Monaco, "Inconsolata", "Roboto Mono", Consolas, monospace'
  }
};