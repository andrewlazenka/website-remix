import React from 'react'
import type { MetaFunction } from '@remix-run/cloudflare'

import Header from '~/components/Header'
import HeroBanner from '~/components/HeroBanner'
import Theme from '~/components/Theme'
import EmojiWiggle from '~/components/EmojiWiggle'
import Layout from '~/components/Layout'

export const meta: MetaFunction = () => [
  {
    title: `Uses - Andrew Lazenka`,
  },
]

function Uses() {
  return (
    <Theme>
      <Header />
      <HeroBanner>
        <h1 className="py-6 text-center font-bold">
          <EmojiWiggle>🧰</EmojiWiggle> Uses
        </h1>
        <h3 className="text-center font-normal">Updated January 30th, 2024</h3>
      </HeroBanner>
      <Layout>
        <section className="py-6 text-lg">
          <h2 className="py-6 text-4xl font-bold" id="desk">
            Desk
          </h2>
          <ul className="m-0 py-0">
            <li>2x LG 27GN800-B 1440p 144hz IPS Monitors</li>
            <li>VIVO Vertical Dual Monitor Mount</li>
            <li>Quntis Monitor Lamp</li>
            <li>Logitech MX Master 3</li>
            <li>Epomaker TH80 SE</li>
            <li>Logitech MX Keys</li>
            <li>Ducky Zero DK2108SZ Mechanical Keyboard</li>
            <li>FireBee Extended Felt Desk Pad</li>
            <li>CalDigit TS4</li>
            <li>Logitech BRIO 4K Webcam</li>
            <li>Shure MV-7 Microphone</li>
            <li>Elgato Wave Mic Arm</li>
            <li>Yamaha HS-7 Speakers</li>
            <li>AKG K240 Headphones</li>
            <li>Native Instruments Komplete Audio 2 Interface</li>
            <li>Haworth Fern Chair</li>
            <li>Ikea 6' Countertop</li>
            <li>Fully Jarvis Standing Desk Legs</li>
            <li>IFCASE Under Desk Laptop Mount</li>
          </ul>
        </section>

        <section className="py-6 text-lg">
          <h2 className="py-6 text-4xl font-bold" id="laptops">
            Laptops
          </h2>
          <ul className="m-0 py-0">
            <li>2020 M1 Macbook Pro 13" (Personal)</li>
            <li>2021 M1 Max Macbook Pro 14" (Work)</li>
          </ul>
        </section>

        <section className="py-6 text-lg">
          <h2 className="py-6 text-4xl font-bold" id="pc-specs">
            PC Specs
          </h2>
          <ul className="m-0 py-0">
            <li>AMD Ryzen 7 3700X CPU</li>
            <li>Corsair H100i CPU Cooler</li>
            <li>Asus ROG Strix X570-E Gaming ATX Motherboard</li>
            <li>G.Skill Trident Z RGB 32GB (2x16GB) DDR4-3200 RAM</li>
            <li>Zotac GeForce GTX 980 Ti 6GB GPU</li>
            <li>WD Green 2TB HDD</li>
            <li>Hitachi Deskstar 4TB HDD</li>
            <li>Samsung 970 EVO 1TB M.2 PCIe SSD</li>
            <li>Corsair Crystal 570X RGB ATX Case</li>
            <li>EVGA SuperNova 750w Gold Modular PSU</li>
          </ul>
        </section>

        <section className="py-6 text-lg">
          <h2 className="py-6 text-4xl font-bold" id="accessories">
            Accessories
          </h2>
          <ul className="m-0 py-0">
            <li>Apple iPad Pro 10.8"</li>
            <li>Apple AirPods Pro</li>
            <li>Apple Pencil (Gen 2)</li>
            <li>2018 Kindle Paperwhite</li>
          </ul>
        </section>

        <section className="py-6 text-lg">
          <h2 className="py-6 text-4xl font-bold" id="apps">
            Apps
          </h2>
          <ul className="m-0 py-0">
            <li>Firefox</li>
            <li>Safari</li>
            <li>iTerm2</li>
            <li>Spotify</li>
            <li>Rise Calendar</li>
            <li>Obsidian</li>
            <li>Numi</li>
            <li>Zoom</li>
            <li>Discord</li>
            <li>Slack</li>
            <li>1Password</li>
            <li>Cold Turkey Blocker</li>
            <li>Rectangle</li>
          </ul>
        </section>

        <section className="py-6 text-lg">
          <h2 className="py-6 text-4xl font-bold" id="editor">
            Editor
          </h2>
          <ul className="m-0 py-0">
            <li>Neovim</li>
            <li>Catppuccin Latte Theme</li>
            <li>Berkeley Mono Nerd Font</li>
          </ul>
        </section>

        <section className="py-6 text-lg">
          <h2 className="py-6 text-4xl font-bold" id="software-and-tools">
            Software & Tools
          </h2>
          <ul className="m-0 py-0">
            <li>brew</li>
            <li>oh-my-zsh</li>
            <li>tmux</li>
            <li>ripgrep</li>
            <li>starship</li>
            <li>gh</li>
          </ul>
        </section>
      </Layout>
    </Theme>
  )
}

export default Uses
