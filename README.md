# Pipsqueak_Term
Pipsqueak,The Open Source Terminal wrapper. Designed as a Productivity Terminal- Sarcastic roommate to solve Your EVERYDAY Terminal confusions! (Please Note that Pipsqueak is Currently in Release, Leave Newfound Bugs In issues!)

# Pipsqueak (`pipsqueak_term`)

A lightweight, local-first terminal companion, shell helper, and utility layer with optional roommate mechanics. 

Pipsqueak runs 100% offline with zero external cloud dependencies, zero tracking, and no heavy configuration overhead. It acts as an ambient wrapper for your terminal environment, providing quick utility tools, package management bridges, and an optional gamified shell-tracking layer.

---

## 🔍 Core Features

### 🛠️ 1. Platform-Agnostic Package Bridge
Instead of remembering syntax variations across systems, `pipsqueak install <package>` dynamically senses your host architecture and routes to your native package manager:
* **macOS:** Maps to `brew install`
* **Arch Linux:** Maps to `yay -S`, `paru -S`, or `sudo pacman -S` (detects active AUR helpers automatically)
* **Debian/Ubuntu:** Maps to `sudo apt install`

It includes native execution collision guards to prevent interference with system binaries and features basic typosquatting warnings for common packages.

### 🎨 2. Hot-Swappable Personality Layers (The Vibes)
Pipsqueak changes its diagnostic output wording based on your selected preference. You can change this instantly from the command line:
* **`CHILL`**: Minimalist, supportive, human-first peer framing.
* **`DEV`**: Strict technical language, direct error metrics, no fluff.
* **`CHAOS`**: Full virtual roommate persona with high-volatility banter.

### 🎮 3. Ambient Environment Tracking (The Roommate Game)
By default, Pipsqueak tracks your active terminal session status using 4 virtual room assets: `["Desk", "WiFi", "Chair", "Monitor"]`.
* **The Penalty:** If a standard system command fails (returns a non-zero exit code), there is an ambient 50% chance your roommate repossesses an item out of spite.
* **The Recovery:** Maintaining a 5-command successful execution streak restores a randomly stolen item until your workspace is fully recovered.

### 📝 4. Local Markdown Scratchpad
An isolated, rapid-access text buffer managed entirely through your shell.
* Run `pipsqueak note` for an instant color-coded breakout view.
* Run `pipsqueak note add <text>` to append quick snippets or links.
* Run `pipsqueak note edit` to drop seamlessly into your native system text editor.

---

## 📦 Installation & Setup

Deploy Pipsqueak globally directly to your local binaries path:

```bash
# Move the script to your home folder
mv pipsqueak.py ~/pipsqueak.py

# Grant execution clearance and symlink it to your local binary path
chmod +x ~/pipsqueak.py
sudo ln -sf ~/pipsqueak.py /usr/local/bin/pipsqueak

# Initialize the onboarding wizard
pipsqueak
