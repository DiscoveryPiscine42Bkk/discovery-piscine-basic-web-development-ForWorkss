if [ $# -eq 0 ]; then
    echo "Invalid input"
    exit 1
fi

for arg in "$@"
    do 
        echo "Creating $arg"
        mkdir "ex${arg}bis"
        echo "Files $arg created!"
done