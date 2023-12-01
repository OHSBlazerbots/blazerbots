#!/usr/bin/env bash
set -euxo pipefail

# Early exit if not in GitHub Codespace
if [[ "${CODESPACES-}" != "true" ]]; then
    echo "No ports to change since not in Codespace. Skipping..."
    exit 1
fi

# Set visibility to public
gh codespace ports visibility 8000:public -c "$CODESPACE_NAME"

# Somewhat hacky, but another attempt to make the website port public.
# This works by making the command to set port visibility execute when opening every shell
# For more context, see link:
# https://github.com/orgs/community/discussions/4068#discussioncomment-3777635
echo "gh codespace ports visibility 8000:public -c \$CODESPACE_NAME" >> ~/.bashrc
echo "gh codespace ports visibility 8000:public -c \$CODESPACE_NAME" >> ~/.zshrc
