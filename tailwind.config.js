/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {

        'custom-gradient': 'linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.8) 40%, rgba(0, 0, 0, 0.5) 70%, rgba(0, 0, 0, 0.2) 100%)',
        'transparent-to-green': 'linear-gradient(to top, transparent, #01F19B)',
        'custom-boxGradient': 'linear-gradient(45deg, #018B59 0%, #7366CF 30%, #090913 100%)',
        'custom-radial': 'radial-gradient(circle at bottom left, #018B59 0%, #7366CF 30%, #090913 50%)',
        'course-gradient': 'radial-gradient(circle at top, #7366CF 0%, #018B59 50%, #090913 80%)',
        'course-bottom': 'radial-gradient(circle at bottom right, #7366CF 0%, #01F19B 10%, #090913 20%)',
        'custom-image': "url('public/Vector 5.svg')",
        'custom-image1': "url('public/Vector 5.png')",
        'custom-image2': "url('public/Vector 6.png')",
        "Learner-background": 'linear-gradient(to left,#090913 30%, #7366CF 50%, #018B59  70%, #090913 80%)',
        
           
        
      },
      colors: {
        'custom-green': '#01F19B',
        'course-button': '#D9D9D91F',
        'custom-background': '#090913',
        'transparant-green': 'rgba(0, 60, 0, 0.5)' ,

      },
      height: {
        '100':"410px",
        '128': '32rem', // Example: you can define larger heights here
        '144': '55rem',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          '.number-gradient': {
            background: 'linear-gradient(180deg, #01F19B 0%, #FFFFFF 100%)',
            '-webkit-background-clip': 'text',
            '-webkit-text-fill-color': 'transparent',
            'background-clip': 'text',
            'color': 'transparent',
          },
          '.text-gradient': {
            background: 'linear-gradient(90deg, #01F19B 0%, #FFFFFF 50%)',
            '-webkit-background-clip': 'text',
            '-webkit-text-fill-color': 'transparent',
            'background-clip': 'text',
            'color': 'transparent',
          },
        },
       
      );
    },
  ],
}

