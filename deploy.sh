wget https://github.com/FastTrackOrg/FastTrack/archive/refs/heads/master.zip
unzip master.zip
rm master.zip
mkdir -p FastTrack/docs
cp -r FastTrack-master/docs/user/* FastTrack/docs/
mkdir -p FastTrack/static/assets
cp docs/assets/*.webm static/assets
mkdir -p FastTrack/static/API
cd FastTrack-master
./generateDocumentation.sh
cd ..
cp -r FastTrack-master/manual/dev/html/html/* FastTrack/static/API/
rm -r FastTrack-master
cd FastTrack
npm run build

