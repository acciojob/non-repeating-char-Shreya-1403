//your JS code here. If required.
let input=prompt("Enter a String");
let ans=input[0];
for (let i = 1; i < input-1; i++) {
	if(input[i]!=input[i+1])
		ans=input[i];
}
return ans;