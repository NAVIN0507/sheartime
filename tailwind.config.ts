import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
			primary:{
				1:"#FFFFFF",
				2:"#FFFFF0",
				3:"#F8F8FF",
				4:"#FFFAF0",
				5:"#F5F5F5",
				6:'#0A0A0A',
				7:'#333333',
				8:'#F5F5F5'
			},
			secondry:{
			1:"#0f172a",
			2:"#191970",
			3:"#00008B",
			4:"#002366",
			5:"#003153",
			6:'#6A0DAD',
			7:'#3A3F44'
			},
			green:{
				1:"#50C878",
				2:"#228B22",
				3:"#98FF98",
				4:"#808000",
				5:"#32CD32",
			},
			graphite:{
				1:'#2F353B'
			},
			

  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		backgroundImage: {
        pattern: "url('/images/pattern.webp')",
      },
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
