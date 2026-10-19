# Discord Channel Sweeper Bot

A Discord bot built with Node.js and Discord.js that automatically monitors selected voice channels and clears a designated text channel when all monitored voice channels become empty.

## Features

- Dynamic command loading
- Server-specific configuration
- SQLite persistence using Enmap
- Configurable text channel whitelist
- Configurable voice channel monitoring
- Automatic channel cleanup when voice channels become empty
- Permission-restricted commands for server owners and developers

## Technologies Used

- JavaScript
- Node.js
- Discord.js
- Enmap
- SQLite
- ESLint

## How It Works

The bot allows a server owner to:

1. Select a text channel for bot commands and cleanup messages.
2. Select one or more voice channels to monitor.
3. Automatically trigger a channel sweep when the monitored voice channels become empty.

Configuration is stored locally using Enmap and SQLite, allowing settings to persist across bot restarts.

## Installation

### Clone the repository

```bash
git clone https://github.com/devilmarster/discord-auto-sweeper.git
cd discord-auto-sweeper
```

### Install dependencies

```bash
npm install
```

### Create a configuration file

Copy:

```text
config.example.json
```

to:

```text
config.json
```

and replace the placeholder values with your own Discord bot token and user ID.

### Start the bot

```bash
node index.js
```

## Project Structure

```text
commands/
├── database.js
├── help.js
├── ping.js
├── reload.js
├── server.js
├── sweep.js
├── test.js
├── white-t-channel.js
└── white-v-channels.js

data/
index.js
config.example.json
package.json
```

## What I Learned

This project helped me develop experience with:

- Event-driven programming
- Working with external APIs
- Persistent data storage
- Configuration management
- Command parsing
- Error handling
- JavaScript project structure
- Git and source control

## Notes

This repository does not include live database files, bot tokens, or other sensitive configuration data.

Database files are generated automatically when the bot is run.
