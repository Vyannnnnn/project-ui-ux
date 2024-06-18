/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        secondary: "#03F701",
        yellow: "#FDE507",
        uhuy: "#080808",
        navStore: "#070707",
        bgCard: "#0A0A0A",
        bgNav2: "#0D0D0D",
        bgInputchat: "#212121",
        bgchat: "#6B6B6B",
        bgchat2: "#1B1B1B",
      },
      backgroundImage: {
        custom: "url('../assets/bg-custom.png')",
        primary: "url('../assets/bg.png')",
        customer: "url('../assets/bg-customer.png')",
        profil_img: "url('../assets/profile_image.png')",
        bgChatSepatu1: "url('../assets/chat-1.png')",
        bgChatSepatu2: "url('../assets/chat-2.png')",
        bgChatSepatu3: "url('../assets/chat-3.png')",
      },
      spacing: {
        '25': '6.25rem',
        '26': '6.5rem',
        '27': '6.75rem',
        'set-cagak-1-L': '6rem',
        'set-cagak-2-L': '11.72rem',
        'set-cagak-3-R': '21.34rem',
        'set-cagak-1-T': '1.79rem',
        'set-cagak-2-T': '10.54rem',
        '28': '7rem',
        '173px': '10.8125rem',
        '197px': '12.3125rem',
        '670px': '41.875rem',
        'luas-bg-chat': '35.875rem',
        'set': '4.1125rem',
      },
      width: {
        '73': '18.25rem',
        '74': '18.5rem',
        '75': '18.75rem',
        '76': '19rem',
        '77': '19.25rem',
        '78': '19.5rem',
        '79': '19.75rem',
        '81': '20.25rem',
        '82': '20.5rem', 
        '83': '20.75rem',
        '84': '21rem',   
        '85': '21.25rem',
        '86': '21.5rem', 
        '87': '21.75rem',
        '88': '22rem',   
        '89': '22.25rem',
        '90': '22.5rem',
        'lol': '29.5rem',
        'hem': '68.95rem',
        '620': '620px',
        '720': '720px',
        '920': '920px',
        '1500': '1500px',
        '1200': '1200px',
      },
      borderWidth: {
        '4': '4px',
      },
      height: {
        '104': '26rem',
        '108': '27rem',
        '112': '28rem',
        '116': '29rem',
        '120': '30rem',
      },
      opacity: {
        '25': '0.25',
        '15': '0.15',
      },
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
        openSans: ['Open Sans', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.border-b-green-custom': {
          borderBottomColor: '#03F701',
        },
        '.placeholder-right::placeholder': {
          paddingLeft: '0.60rem',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
