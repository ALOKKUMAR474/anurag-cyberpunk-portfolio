$assetsDir = "stitch_assets"
if (!(Test-Path $assetsDir)) { New-Item -ItemType Directory -Path $assetsDir }

$assets = @(
    @{ name = "hero.html"; url = "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzAxZjY5M2NiNTNlNDRmNmQ5MjRjNmQ1ZDA1ODY4ZDBkEgsSBxCo5IOIiwcYAZIBJAoKcHJvamVjdF9pZBIWQhQxMjc3MDg2OTA0Nzg5Mzc3NzM3MQ&filename=&opi=89354086" },
    @{ name = "hero.png"; url = "https://lh3.googleusercontent.com/aida/ADBb0uj3yMNFEW10GtXGkG0HXHfS-CC4MyCz_yhntjU552x1zmETubJYPGq_QfdvTb5aX8a7KeUnpiiBiAQwsGxBlvlrP2us3JHBbOnH-uZZ7rkdEWYxZC_vhPVPCFh5T5bM_j03K6mti5S0ZKV8PfQ-tKoBfElvVGk287giSxUlgNxBzj8Bib2o1VCwPCs1Q0MNFOEPxujJOC-bSzWXIt-5RzfTuLtB669LFs0DmEGGrIXUPI_A5UDqx4jbh5JR" },
    @{ name = "case_study.html"; url = "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzJiMTFhNDQyODZhZjQ5MzM5NWYxMjkwNTY1MmY2NmE2EgsSBxCo5IOIiwcYAZIBJAoKcHJvamVjdF9pZBIWQhQxMjc3MDg2OTA0Nzg5Mzc3NzM3MQ&filename=&opi=89354086" },
    @{ name = "case_study.png"; url = "https://lh3.googleusercontent.com/aida/ADBb0ujRdFuz_8e2e2SdfTFFmn4cmkI88QfhENAMSYHtUeQ3IM3CNLfzhUQmIHEfJIPGwhrHIID_PZvC91-Cz82tt_5hdTTe-hqMUrLLaBbWaxkK94rB-mSd3w_CVmA-WsJqv7oyEGIj_zN1eDGOGsJ1zo-xa19PmCT3LBm1Pv7alaLo0srB5UjLiQP9si0dx5Eyvz7OjkmVCp2RzdPFq43_qo9X4UFEAdEb8LtRGqTGGskNnkPV_TvC9RbsPXX1" },
    @{ name = "gallery.html"; url = "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzViZGVjMzNlYzdiYjQ4NTNhMmIyOGNiNjZlYjM5NTdiEgsSBxCo5IOIiwcYAZIBJAoKcHJvamVjdF9pZBIWQhQxMjc3MDg2OTA0Nzg5Mzc3NzM3MQ&filename=&opi=89354086" },
    @{ name = "gallery.png"; url = "https://lh3.googleusercontent.com/aida/ADBb0ui9naMBlxrhu-H5ne1s6rTVsmh3x3uGvvLfuHVAR0BCtpw2QtM9b0iU-cI6VOXxlNmm6Ooo34yTb9sl8h7vw-nnz6hK0cE0rErbgaYZ_fO5xx30YpjE3KHGIJnX2N--OXZvVBtbxFPoQHLidJ887EuOFfZkkvRT4JO2iaWuWoC7ix0pX3HnfpGDjuORpe3JCHmwzVY7ZbtwUvLvnU-tl_U7NnbD-eO-lFZ2KgTtoR7qSg_DuLNKyicfO7Uk" },
    @{ name = "anurag_creation.png"; url = "https://lh3.googleusercontent.com/aida/ADBb0ui1neAqwUwbpGyca-824cJAwEw0wCUmin9iC4OurQ6CoJ5wjXVjvy6YN3zMaC9J3cT9TfWcu2qc4g8KUEt_aIXmKOhw5gCPFyVtgTMu4cnxb-CUtZLH1F9uXGIBasbCAhU9DKH49H2lN92kgYmOzNL90Nr3JDNAjejAZL5nCLF3ehtwFtvXxizgBqYvtPG8rmkp0Ib30Jn-VWGl54-xiO4SAYjw2kvc-1yHZt8X2TwlXFfaGw1fVbHvgzLRj2kmYGQYWo_3ibzz8g" },
    @{ name = "services.html"; url = "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzIyZTMwZGY1ZjM1OTQ3OWZhMjE0NDFiNmI1MDI1YTI2EgsSBxCo5IOIiwcYAZIBJAoKcHJvamVjdF9pZBIWQhQxMjc3MDg2OTA0Nzg5Mzc3NzM3MQ&filename=&opi=89354086" },
    @{ name = "services.png"; url = "https://lh3.googleusercontent.com/aida/ADBb0ujaTsc99-jBx4ELuG_ZckXyKr82UlIChU2-82NbQcnWXRkfoVjwfEu7vQWvQIaaJmrklT_YzeqQUym8iRr8RF0VFbQhye1vwry2Q39cgGkJSYeaPZ_Z6Z5suXpkhDHr14eMPs8LQt88FBEzcJmd--ciZWd6nmifooH0AQQ1DCzJvH77tgy9HeNoXjYRpBXWXk9pY2rHAUsz0VmJgZPBYH6fGtcZrGfzM9DXX3yZ7lF1cLZCpjsro2HJRzce" },
    @{ name = "pdf_layout.html"; url = "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzBmMTBjNjNiYjQwNDRmNzU5ZmM2NzE0M2UzYjk0Y2NjEgsSBxCo5IOIiwcYAZIBJAoKcHJvamVjdF9pZBIWQhQxMjc3MDg2OTA0Nzg5Mzc3NzM3MQ&filename=&opi=89354086" },
    @{ name = "pdf_layout.png"; url = "https://lh3.googleusercontent.com/aida/ADBb0ugVgmXTEes2XiVlOtyEqiFyBSHAIJwiJBWT3CoC9wwO8muCunczVb0K3YlpfPmHDElWp3ouQ32u-A1QzX4nzafTLnBGk50he-dpG0WuOik_qbJQSIS4UTb9G1U7A-6EIr5Z9rerJ8q77yoms4s6HJQ_00KSVjy2deDs9Hp9UXsW0JAQn7TKXGvSDUv4UrTKLgmFJCYc6eBhKxtKhJbyzSc0r0x4_m0SSv7xIWxQAL1rKEfra_Hc1eeZVTZb" },
    @{ name = "requirements.html"; url = "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzlmMzg0MDllYTY1MDQ4NmViMzg2MTU3YzZhYjc2NWU4EgsSBxCo5IOIiwcYAZIBJAoKcHJvamVjdF9pZBIWQhQxMjc3MDg2OTA0Nzg5Mzc3NzM3MQ&filename=&opi=89354086" }
)

foreach ($asset in $assets) {
    $outputPath = Join-Path $assetsDir $asset.name
    Write-Host "Downloading $($asset.name)..."
    curl.exe -L -o $outputPath $asset.url
}
