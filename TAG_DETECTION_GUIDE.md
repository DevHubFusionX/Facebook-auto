# 🔍 How Tag Detection Works

## 🎯 Tag Monitoring Scope

The system does **NOT** monitor all accounts (that would be messy and slow).

Instead, you pick **one "primary" account** (or page) — the one you expect people to tag.

That primary account is the **listener**.

## 🔹 Architecture Flow

### Primary Account = Listener
- This account stays logged in
- It continuously checks notifications for new tags
- **Only this account monitors**

### Other Accounts = Actors
- These accounts don't monitor
- They just wait for a broadcast
- When the primary detects a tag, it shares the post link to all other accounts

### Action Phase
- All accounts (including the primary) go to the post link
- They click Like (randomized timing)

## ✅ Why Only One Monitor?

- **Faster detection** (no duplication)
- **Lower resource usage**
- **Cleaner architecture** — one "scanner", many "reactors"

## Login Sessions Stay Alive

All accounts log in once (with proxy + fingerprint).

Session cookies are stored so accounts don't log out.

This way, the listener has access to notifications, and actors are ready for instant liking.

## Real-Time Listener (Notification Scan)

Facebook gives you a notification whenever someone tags you / your page / your account.

The system continuously scans:

- The Notifications panel (https://www.facebook.com/notifications)
- OR the Graph API (if you manage to get page tokens, but for personal accounts it's hard).

## Detection Logic

The listener runs on a loop (e.g. every 1–2 seconds).

It looks for:

- New notifications that contain @YourAccountName (tag).
- Or posts/comments where your account is tagged.

Example:

```javascript
while (systemRunning) {
    check_notifications()
    if (newTagDetected) {
        extract postLink
        broadcast(postLink to all accounts)
    }
}
```

## Extract Tagged Post Link

Once the notification is found, the system parses the HTML/JSON to grab the post link.

That link is then passed to all logged-in sessions.

## Broadcast & Auto-Like

All accounts open the post (headless browser / background tab).

Each one clicks "Like" within ~1 second (randomized by milliseconds).

## ⚡ Example Flow (Facebook Tag Detection)

1. **Sushma tags @YourAccount in a post.**
2. **Facebook generates a notification** → "Sushma tagged you in a post".
3. **Listener sees this within 1 second.**
4. **Listener extracts the post URL.**
5. **Broadcast system sends it to all active accounts.**
6. **Accounts auto-like the post almost instantly.**

## 👉 Simple Explanation for Clients:

**"The system monitors ONE primary account's notifications. When someone tags that account, it instantly sends the post link to ALL your accounts, which immediately like it."**

### Direct Answer:
**Yes, the system monitors ONE account (the listener), then distributes the detected tagged post link to ALL accounts for liking.**

## 🔧 Technical Implementation

### Notification Monitoring
- **Frequency**: Every 2 seconds
- **Target**: Facebook notifications page
- **Detection**: HTML parsing for tag notifications
- **Extraction**: Post URL from notification links

### Session Management
- **Persistence**: MongoDB cookie storage
- **Validation**: Heartbeat every 5 minutes
- **Recovery**: Automatic re-login on session expiry
- **Stealth**: Randomized user agents and delays

### Broadcasting System
- **Speed**: Parallel execution across all accounts
- **Timing**: 0-500ms randomization between likes
- **Reliability**: Duplicate detection prevents re-processing
- **Monitoring**: Real-time WebSocket updates

## 🎯 Key Features

- **Instant Detection**: 1-2 second response time
- **Multi-Account**: Simultaneous operation across all accounts
- **Session Persistence**: No repeated logins required
- **Stealth Operation**: Human-like behavior patterns
- **Real-time Monitoring**: Live dashboard updates