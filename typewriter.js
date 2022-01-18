const sentence = "hello there from lighthouse labs";
let time = 0;

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, time);

  time += 50;
}

setTimeout(() => {
  console.log("");
}, time);
