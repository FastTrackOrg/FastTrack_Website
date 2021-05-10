wget https://github.com/FastTrackOrg/FastTrack/archive/refs/heads/master.zip
unzip master.zip
rm master.zip
cp -r FastTrack-master/docs/user/* FastTrack/docs/
rm -r FastTrack-master
