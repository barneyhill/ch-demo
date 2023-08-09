#!/bin/bash
set -eu

indb="$1"
outdir="$2"

# for chunked mode, we need to know the database size in bytes beforehand
bytes="$(stat -f "%z" "$indb")"
# set chunk size to 10MiB (needs to be a multiple of the `pragma page_size`!)
serverChunkSize=$((10 * 1024 * 1024))
suffixLength=3

rm -f "$outdir/db.sqlite3"*

# Split file with desired naming convention
count=0
suffixFormat="%0${suffixLength}d"
tmpFile="tmp_split_file_for_$indb"
split -b $serverChunkSize "$indb" $tmpFile

for file in $tmpFile*; do
    suffix=$(printf "$suffixFormat" $count)
    mv "$file" "$outdir/db.sqlite3.$suffix"
    count=$((count + 1))
done

# set request chunk size to match page size
requestChunkSize="$(sqlite3 "$indb" 'pragma page_size')"

# write a json config
echo '
{
    "serverMode": "chunked",
    "requestChunkSize": '$requestChunkSize',
    "databaseLengthBytes": '$bytes',
    "serverChunkSize": '$serverChunkSize',
    "urlPrefix": "db.sqlite3.",
    "suffixLength": '$suffixLength'
}' > "$outdir/config.json"
