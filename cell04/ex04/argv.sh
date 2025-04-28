echo "$1"

echo "$2"

echo "$3"

if  [$# > 3 | $# == 0 ]; then
    echo "Invalid input, make sure it is more than 1 or less than 3 input"
    exit 1

fi
