# Super Slab UI Extension

## Disclaimer
I have no affiliation with Prong or SuperSlab. Use this at your own risk! 

## Installing

The extension lives in the ext folder. Go to the extensions page of your Chromium-based browser (likely chrome://extensions) and then turn on developer mode. This should make a "Load unpacked" button appear. Click that button, then select the ext folder as your unpacked extension. The extension is setup to only be active at http://192.168.120.240/.

## Usage/How it works

When you navigate to the page, this code makes a request for the button mapping for the current profile. Any edits you make will not persist until you hit "Commit".

### Changing profiles
To change profiles, change the profile in the standard UI, then hit "Refresh" in the extension UI. If you don't do this and then you hit "Commit" your setup for the new profile will be overwritten.

### Copying button mappings to another profile
To copy, first go to the profile you want to copy from (and refresh), hit "Copy", then change profiles to where you want to paste (and hit refresh), then hit paste. Confirm that this is what you want or make any changes, then hit commit.

## Building

If you want to hack on top of this, make your edits in the src folder, then run

```npm run build-extension```

This will build your files and place them into the ext folder. You should then refresh the extension in your extensions page.