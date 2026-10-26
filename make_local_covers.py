import re
from pathlib import Path

base = Path(r"C:\Users\user\Desktop\Portfolio website\project-covers")
base.mkdir(exist_ok=True)

titles = [
    'Fantasy MMORPG Game',
    'Blockchain MMORPG GAME',
    'Horror Game',
    'MMORPG Game',
    'web3 game',
    'Farm-themed DeFi game with P2E mechanics',
    '2d pixel art platformer game in Godot',
    '2D Pixel Game',
    'Tower defence shooting Game',
    'Roblox simulation Game',
    'Roblox fps game',
    '2D pixelated platform fighter Game',
    '2D Game',
    '3D Game development',
    'Game environment',
    'Environment',
    'MMO Game environment',
    'Unreal Engine 5.4 Environment',
    'Unreal Engine 5 Game Environment',
    'Game vfx',
    'Unreal Engine 5 Game',
    'Game Design Concept',
    'Mobile Game Prototype',
    'Survival Game System',
    'Action Combat Demo',
    'RPG Progression System',
    'Loot & Economy Design',
]

for index, title in enumerate(titles, start=1):
    slug = re.sub(r'[^a-z0-9]+', '-', title.lower()).strip('-') or f'project-{index}'
    file_name = f'{index:02d}-{slug}.svg'
    svg = f'''<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="900" viewBox="0 0 1200 900">
  <defs>
    <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
      <stop offset="0%" stop-color="#09131d"/>
      <stop offset="55%" stop-color="#11273d"/>
      <stop offset="100%" stop-color="#15d4d7"/>
    </linearGradient>
    <linearGradient id="glow" x1="0" x2="1" y1="0" y2="0">
      <stop offset="0%" stop-color="#7ce3ff" stop-opacity="0.9"/>
      <stop offset="100%" stop-color="#15d4d7" stop-opacity="0.18"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="900" fill="url(#bg)"/>
  <circle cx="1040" cy="150" r="220" fill="#15d4d7" opacity="0.12"/>
  <circle cx="180" cy="730" r="270" fill="#7ce3ff" opacity="0.12"/>
  <rect x="80" y="90" width="1040" height="720" rx="30" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.16)"/>
  <rect x="118" y="146" width="260" height="36" rx="18" fill="#7ce3ff" opacity="0.16"/>
  <text x="132" y="173" fill="#dcf9ff" font-size="22" font-family="Segoe UI, Arial, sans-serif" letter-spacing="3">PORTFOLIO</text>
  <text x="118" y="455" fill="#f4fbff" font-size="62" font-weight="700" font-family="Segoe UI, Arial, sans-serif">{title}</text>
  <rect x="118" y="500" width="470" height="4" fill="#15d4d7" opacity="0.8"/>
  <text x="118" y="590" fill="#c6d5ea" font-size="30" font-family="Segoe UI, Arial, sans-serif">Game design and development showcase</text>
  <g opacity="0.75">
    <path d="M760 620 L960 620 L918 420 L760 420 Z" fill="url(#glow)"/>
    <rect x="780" y="290" width="160" height="190" rx="18" fill="#0b1825" stroke="#7ce3ff" stroke-opacity="0.65"/>
    <rect x="840" y="240" width="120" height="120" rx="16" fill="#15d4d7" opacity="0.18"/>
    <path d="M842 387 L900 336 L962 392" fill="none" stroke="#7ce3ff" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="842" cy="387" r="14" fill="#7ce3ff"/>
    <circle cx="962" cy="392" r="14" fill="#7ce3ff"/>
  </g>
</svg>
'''
    (base / file_name).write_text(svg, encoding='utf-8')
    print(f'Created {file_name}')

print(f'Complete: {len(titles)} local cover files generated.')
