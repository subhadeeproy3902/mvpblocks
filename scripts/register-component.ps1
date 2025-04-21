# PowerShell script to register a component, build registry, and sort registry

param (
    [Parameter(Mandatory=$true)]
    [string]$ComponentPath
)

# Check if the component file exists
if (-not (Test-Path $ComponentPath)) {
    Write-Error "Component file not found: $ComponentPath"
    exit 1
}

# Run the auto-register script with the component path
Write-Host "Registering component: $ComponentPath"
bun run register $ComponentPath

# Success message
Write-Host "`nComponent successfully registered, built, and sorted!" -ForegroundColor Green
Write-Host "You can now use your component in the project."
