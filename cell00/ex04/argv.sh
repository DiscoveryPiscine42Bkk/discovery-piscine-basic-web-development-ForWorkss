if [ $# -eq 0 ]; then
    echo "must provide at least 1"
elif [ $# -eq 3 ]; then
    echo "$@"
elif [ $# -lt 3 ]; then
    echo "$@"
else
    :
fi