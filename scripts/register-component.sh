#!/bin/bash

# Bash script to register a component, build registry, and sort registry

# Check if component path is provided
if [ $# -eq 0 ]; then
    echo "Error: Component path is required."
    echo "Usage: ./register-component.sh <component-path>"
    exit 1
fi

COMPONENT_PATH=$1

# Check if the component file exists
if [ ! -f "$COMPONENT_PATH" ]; then
    echo "Error: Component file not found: $COMPONENT_PATH"
    exit 1
fi

# Run the auto-register script with the component path
echo "Registering component: $COMPONENT_PATH"
bun run register "$COMPONENT_PATH"

# Success message
echo -e "\nComponent successfully registered, built, and sorted!"
echo "You can now use your component in the project."
