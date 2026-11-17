$ErrorActionPreference = 'Stop'
Set-Location $PSScriptRoot
$portableNode = Join-Path $PSScriptRoot '.tools/node-v22.16.0-win-x64'
if (Test-Path (Join-Path $portableNode 'node.exe')) { $env:Path = "$portableNode;$env:Path" }
if (!(Test-Path 'node_modules')) { & npm.cmd install }
& npm.cmd run dev -- --host 0.0.0.0 --port 5174 --strictPort

