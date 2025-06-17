#!/bin/bash

disk_usage=70 
disk_threshold=80

if [ "$disk_threshold" -gt "$disk_usage" ]; then #an if statement is used to see if the threshold is greater than the disk usage.
    echo "Disk usage is at $disk_usage and is below threshold" #this is the printed messege since the disk usage is below the threshold.
else
    echo "Disk usage is at $disk_usage and is above threshold" #alternative if the disk usage is above the threshold.
fi