#include<bits/stdc++.h>
using namespace std;
bool isPrime(int n){
    int flag = 0;
    for(int i=1;i<=n;i++){
        if(n%i==0){
            flag++;
        }
    }
    if(flag>2){
        return false;
    }
    else{
        return true;
    }
}
int main(){
    int n;
    cin>>n;
    if(isPrime(n)){
        cout<<n<<" is prime number"<<endl;
    }
    else{
        cout<<n<<" is composite number"<<endl;
    }

}