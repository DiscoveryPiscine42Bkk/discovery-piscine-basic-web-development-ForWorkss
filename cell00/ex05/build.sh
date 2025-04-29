if [ $# -eq 0 ]; then
	echo "No arugment supplied"
	exit 1
fi

for arg in "$@"
do 
	echo "User requested for ex$arg"
	echo "Building  ex$arg..."
	mkdir "ex$arg"
	echo "Builded ex$arg"
done


