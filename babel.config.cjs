module.exports = (api) => {
    const presets = [
      ['@babel/preset-env', { targets: { node: 'current' } }],
      '@babel/preset-react',
    ];
  
    if (api.env('test')) {
      presets[0][1].targets = { node: 'current' };
    }
  
    return {
      presets,
    };
  };
  