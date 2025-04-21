param (
    [Parameter(Mandatory=$true)]
    [string]$ComponentPath
)

if (-not (Test-Path $ComponentPath)) {
    Write-Error "Component file not found: $ComponentPath"
    exit 1
}

Write-Host "Registering component: $ComponentPath"
bun run register $ComponentPath

Write-Host "`nComponent successfully registered, built, and sorted!" -ForegroundColor Green
Write-Host "You can now use your component in the project."
