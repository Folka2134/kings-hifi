module.exports = {
  content: ["./src/**/*.{js,jsx}",  ],  
  theme: {    
    extend: {
      colors: {
        'main-yellow': '#F3D534',
        'main-black' : '#292929',
        'main-green' : '#38A545',
        'main-red' : '#E32512',
        'font-title-color' : '#333333'
      },
      fontFamily: {
        "raleway" : ['"Raleway"'],
        "hind-madurai" : ['"Hindi Madurai"'],
        "arimo" : ['"Arimo"']
      },
      animation: {        
        'spin-slow': 'spin 2.6s linear infinite',
        'fast-pulse' : 'pulse 1.5s infinite'
      },
      screens: {
        '3xl': '1800px',
        '4xl': '2000px',
      },
    },
  },  
  plugins: [],
}
