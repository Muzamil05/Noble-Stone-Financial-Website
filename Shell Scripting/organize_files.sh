#!/bin/bash

#Array of files with different file types.
files=('document.txt' 'image.jpg' 'video.mp4' 'audio.mp3' 'document2.txt' 'image2.jpg' 'video2.mp4' 'audio2.mp3' 'Thesis.pdf' 'word.pdf')

for file in ${files[@]} #loop through all of the files.
do
    if [[ $file == *.txt ]] #if statement to print if a file is a specific type.
    then
        echo "Moving $file to Text Files Folder" #print the file and its type.
    elif [[ $file == *.jpg ]]
    then
        echo "Moving $file to Images Folder"
    elif [[ $file == *.mp4 ]]
    then
        echo "Moving $file to Videos Folder"
    elif [[ $file == *.mp3 ]]
    then
        echo "Moving $file to Audio Folder"
    elif [[ $file == *.pdf ]]
    then
        echo "Moving $file to PDFs Folder"
    fi
done