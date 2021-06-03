wget https://github.com/FastTrackOrg/FastTrack/archive/refs/heads/master.zip
unzip master.zip
rm master.zip
mkdir FastTrack/docs
cp -r FastTrack-master/docs/user/* FastTrack/docs/
rm -r FastTrack-master
cd FastTrack
mkdir static/assets
cp docs/assets/*.webm static/assets
npm run build

