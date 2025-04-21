if [ $# -eq 0 ]; then
    echo "Error: Component path is required."
    echo "Usage: ./register-component.sh <component-path>"
    exit 1
fi

COMPONENT_PATH=$1

if [ ! -f "$COMPONENT_PATH" ]; then
    echo "Error: Component file not found: $COMPONENT_PATH"
    exit 1
fi

echo "Registering component: $COMPONENT_PATH"
bun run register "$COMPONENT_PATH"

echo -e "\nComponent successfully registered, built, and sorted!"
echo "You can now use your component in the project."
