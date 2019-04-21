document.write('<link rel="stylesheet" href="/css/gist/embed-d157b26129d34fcae30edb74987c707a6ffb45217fab96bb6af88ce1bac0ee24.css">')
document.write('<div id=\"gist30203348\" class=\"gist\">\n    <div class=\"gist-file\">\n      <div class=\"gist-data\">\n        <div class=\"js-gist-file-update-container js-task-list-container file-box\">\n  <div id=\"file-lenovo_laptop_specs-md\" class=\"file\">\n    \n  <div id=\"readme\" class=\"blob instapaper_body\">\n    <article class=\"markdown-body entry-content\" itemprop=\"mainContentOfPage\"><p>Output of <code>sudo dmidecode | grep -A3 \'^System Information\'<\/code>:<\/p>\n\n<div class=\"highlight highlight-source-shell\"><pre>System Information\n    Manufacturer: LENOVO\n    Product Name: 68851L2\n    Version: ThinkPad Edge E531<\/pre><\/div>\n\n<p><a href=\"http://shop.lenovo.com/us/en/laptops/thinkpad/e-series/e531/\">here<\/a> is its webpage at Lenovo\'s website<\/p>\n\n<p>The output of <code>lspci -k<\/code> under Arch Linux (on my removable drive) is:<\/p>\n\n<div class=\"highlight highlight-source-shell\"><pre>00:00.0 Host bridge: Intel Corporation 3rd Gen Core processor DRAM Controller (rev 09)\n    Subsystem: Lenovo Device 5018\n    Kernel driver <span class=\"pl-k\">in<\/span> use: ivb_uncore\nlspci: Unable to load libkmod resources: error -12\n00:01.0 PCI bridge: Intel Corporation Xeon E3-1200 v2/3rd Gen Core processor PCI Express Root Port (rev 09)\n    Kernel driver <span class=\"pl-k\">in<\/span> use: pcieport\n00:02.0 VGA compatible controller: Intel Corporation 3rd Gen Core processor Graphics Controller (rev 09)\n    Subsystem: Lenovo Device 5018\n    Kernel driver <span class=\"pl-k\">in<\/span> use: i915\n00:14.0 USB controller: Intel Corporation 7 Series/C210 Series Chipset Family USB xHCI Host Controller (rev 04)\n    Subsystem: Lenovo Device 5018\n    Kernel driver <span class=\"pl-k\">in<\/span> use: xhci_hcd\n00:16.0 Communication controller: Intel Corporation 7 Series/C210 Series Chipset Family MEI Controller <span class=\"pl-c\">#1 (rev 04)<\/span>\n    Subsystem: Lenovo Device 5018\n    Kernel driver <span class=\"pl-k\">in<\/span> use: mei_me\n00:1a.0 USB controller: Intel Corporation 7 Series/C210 Series Chipset Family USB Enhanced Host Controller <span class=\"pl-c\">#2 (rev 04)<\/span>\n    Subsystem: Lenovo Device 5018\n    Kernel driver <span class=\"pl-k\">in<\/span> use: ehci-pci\n00:1b.0 Audio device: Intel Corporation 7 Series/C210 Series Chipset Family High Definition Audio Controller (rev 04)\n    Subsystem: Lenovo Device 5018\n    Kernel driver <span class=\"pl-k\">in<\/span> use: snd_hda_intel\n00:1c.0 PCI bridge: Intel Corporation 7 Series/C210 Series Chipset Family PCI Express Root Port 1 (rev c4)\n    Kernel driver <span class=\"pl-k\">in<\/span> use: pcieport\n00:1c.1 PCI bridge: Intel Corporation 7 Series/C210 Series Chipset Family PCI Express Root Port 2 (rev c4)\n    Kernel driver <span class=\"pl-k\">in<\/span> use: pcieport\n00:1c.3 PCI bridge: Intel Corporation 7 Series/C210 Series Chipset Family PCI Express Root Port 4 (rev c4)\n    Kernel driver <span class=\"pl-k\">in<\/span> use: pcieport\n00:1d.0 USB controller: Intel Corporation 7 Series/C210 Series Chipset Family USB Enhanced Host Controller <span class=\"pl-c\">#1 (rev 04)<\/span>\n    Subsystem: Lenovo Device 5018\n    Kernel driver <span class=\"pl-k\">in<\/span> use: ehci-pci\n00:1f.0 ISA bridge: Intel Corporation HM77 Express Chipset LPC Controller (rev 04)\n    Subsystem: Lenovo Device 5018\n    Kernel driver <span class=\"pl-k\">in<\/span> use: lpc_ich\n00:1f.2 SATA controller: Intel Corporation 7 Series Chipset Family 6-port SATA Controller [AHCI mode] (rev 04)\n    Subsystem: Lenovo Device 5018\n    Kernel driver <span class=\"pl-k\">in<\/span> use: ahci\n00:1f.3 SMBus: Intel Corporation 7 Series/C210 Series Chipset Family SMBus Controller (rev 04)\n    Subsystem: Lenovo Device 5018\n01:00.0 3D controller: NVIDIA Corporation GK208M [GeForce GT 740M] (rev a1)\n    Subsystem: Lenovo Device 5019\n    Kernel driver <span class=\"pl-k\">in<\/span> use: nouveau\n03:00.0 Unassigned class [ff00]: Realtek Semiconductor Co., Ltd. RTS5229 PCI Express Card Reader (rev 01)\n    Subsystem: Lenovo Device 5018\n    Kernel driver <span class=\"pl-k\">in<\/span> use: rtsx_pci\n04:00.0 Network controller: Broadcom Corporation BCM43228 802.11a/b/g/n\n    Subsystem: Broadcom Corporation Device 0607\n    Kernel driver <span class=\"pl-k\">in<\/span> use: wl\n05:00.0 Ethernet controller: Realtek Semiconductor Co., Ltd. RTL8111/8168/8411 PCI Express Gigabit Ethernet Controller (rev 07)\n    Subsystem: Lenovo Device 5018\n    Kernel driver <span class=\"pl-k\">in<\/span> use: r8169<\/pre><\/div>\n\n<p>while running the 4.3.3.2-ARCH kernel on 20 January 2016. Further details:<\/p>\n\n<div class=\"highlight highlight-source-shell\"><pre>CPU: 4 x Intel(R) Core(TM) i5-3230M CPU @ 2.60GHz\nRAM: 11.32 MB<\/pre><\/div>\n<\/article>\n  <\/div>\n\n  <\/div>\n  \n<\/div>\n\n      <\/div>\n      <div class=\"gist-meta\">\n        <a href=\"https://gist.github.com/fusion809/b44fa06f1ed0075af0cc/raw/f8253711714fc07e19f100917d1d66cb83e17875/Lenovo_Laptop_specs.md\" style=\"float:right\">view raw<\/a>\n        <a href=\"https://gist.github.com/fusion809/b44fa06f1ed0075af0cc#file-lenovo_laptop_specs-md\">Lenovo_Laptop_specs.md<\/a>\n        hosted with &#10084; by <a href=\"https://github.com\">GitHub<\/a>\n      <\/div>\n    <\/div>\n<\/div>\n')
