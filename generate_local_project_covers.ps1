$coverDir = Join-Path $PSScriptRoot 'project-covers'
New-Item -ItemType Directory -Force -Path $coverDir | Out-Null

$items = @(
  @{ name = '01-fantasy-mmorpg.svg'; title = 'Fantasy MMORPG Game' },
  @{ name = '02-blockchain-mmorpg.svg'; title = 'Blockchain MMORPG GAME' },
  @{ name = '03-horror-game.svg'; title = 'Horror Game' },
  @{ name = '04-mmorpg-game.svg'; title = 'MMORPG Game' },
  @{ name = '05-web3-game.svg'; title = 'web3 game' },
  @{ name = '06-defi-p2e.svg'; title = 'Farm-themed DeFi game with P2E mechanics' },
  @{ name = '07-platformer-godot.svg'; title = '2d pixel art platformer game in Godot' },
  @{ name = '08-2d-pixel-game.svg'; title = '2D Pixel Game' },
  @{ name = '09-tower-defense.svg'; title = 'Tower defence shooting Game' },
  @{ name = '10-roblox-simulation.svg'; title = 'Roblox simulation Game' },
  @{ name = '11-roblox-fps.svg'; title = 'Roblox fps game' },
  @{ name = '12-platform-fighter.svg'; title = '2D pixelated platform fighter Game' },
  @{ name = '13-2d-game.svg'; title = '2D Game' },
  @{ name = '14-3d-game.svg'; title = '3D Game development' },
  @{ name = '15-game-environment.svg'; title = 'Game environment' },
  @{ name = '16-environment.svg'; title = 'Environment' },
  @{ name = '17-mmo-game-environment.svg'; title = 'MMO Game environment' },
  @{ name = '18-unreal-5-4-environment.svg'; title = 'Unreal Engine 5.4 Environment' },
  @{ name = '19-unreal-5-game-environment.svg'; title = 'Unreal Engine 5 Game Environment' },
  @{ name = '20-game-vfx.svg'; title = 'Game vfx' },
  @{ name = '21-unreal-5-game.svg'; title = 'Unreal Engine 5 Game' },
  @{ name = '22-game-design-concept.svg'; title = 'Game Design Concept' },
  @{ name = '23-mobile-game-prototype.svg'; title = 'Mobile Game Prototype' },
  @{ name = '24-survival-game-system.svg'; title = 'Survival Game System' },
  @{ name = '25-action-combat-demo.svg'; title = 'Action Combat Demo' },
  @{ name = '26-rpg-progression-system.svg'; title = 'RPG Progression System' },
  @{ name = '27-loot-economy-design.svg'; title = 'Loot & Economy Design' }
)

foreach ($item in $items) {
  $path = Join-Path $coverDir $item.name
  $title = $item.title
  $svg = @"
<svg xmlns=""http://www.w3.org/2000/svg"" width=""1200"" height=""900"" viewBox=""0 0 1200 900""><defs>
  <linearGradient id=""bg"" x1=""0"" x2=""1"" y1=""0"" y2=""1""><stop offset=""0%"" stop-color=""#0a1320""/><stop offset=""55%"" stop-color=""#122a3e""/><stop offset=""100%"" stop-color=""#15d4d7""/></linearGradient>
  <linearGradient id=""glow"" x1=""0"" x2=""1"" y1=""0"" y2=""0""><stop offset=""0%"" stop-color=""#7ce3ff"" stop-opacity=""0.9""/><stop offset=""100%"" stop-color=""#15d4d7"" stop-opacity=""0.18""/></linearGradient>
</defs>
<rect width=""1200"" height=""900"" fill=""url(#bg)""/>
<circle cx=""1040"" cy=""150"" r=""220"" fill=""#15d4d7"" opacity=""0.12""/>
<circle cx=""180"" cy=""730"" r=""270"" fill=""#7ce3ff"" opacity=""0.12""/>
<rect x=""80"" y=""90"" width=""1040"" height=""720"" rx=""30"" fill=""rgba(255,255,255,0.04)"" stroke=""rgba(255,255,255,0.16)""/>
<rect x=""118"" y=""146"" width=""260"" height=""36"" rx=""18"" fill=""#7ce3ff"" opacity=""0.16""/>
<text x=""132"" y=""173"" fill=""#dcf9ff"" font-size=""22"" font-family=""Segoe UI, Arial, sans-serif"" letter-spacing=""3"">PORTFOLIO</text>
<text x=""118"" y=""455"" fill=""#f4fbff"" font-size=""62"" font-weight=""700"" font-family=""Segoe UI, Arial, sans-serif"">$title</text>
<rect x=""118"" y=""500"" width=""470"" height=""4"" fill=""#15d4d7"" opacity=""0.8""/>
<text x=""118"" y=""590"" fill=""#c6d5ea"" font-size=""30"" font-family=""Segoe UI, Arial, sans-serif"">Game design and development showcase</text>
<g opacity=""0.75""><path d=""M760 620 L960 620 L918 420 L760 420 Z"" fill=""url(#glow)""/><rect x=""780"" y=""290"" width=""160"" height=""190"" rx=""18"" fill=""#0b1825"" stroke=""#7ce3ff"" stroke-opacity=""0.65""/><rect x=""840"" y=""240"" width=""120"" height=""120"" rx=""16"" fill=""#15d4d7"" opacity=""0.18""/><path d=""M842 387 L900 336 L962 392"" fill=""none" stroke=""#7ce3ff"" stroke-width=""8"" stroke-linecap=""round"" stroke-linejoin=""round""/><circle cx=""842"" cy=""387"" r=""14"" fill=""#7ce3ff""/><circle cx=""962"" cy=""392"" r=""14"" fill=""#7ce3ff""/></g>
</svg>
"@
  [System.IO.File]::WriteAllText($path, $svg, [System.Text.Encoding]::UTF8)
}

Write-Host "Created $($items.Count) local cover files in $coverDir"
