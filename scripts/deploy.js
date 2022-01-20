async function main() {
    const BR = await ethers.getContractFactory("BattleRoyale");
    const br = await BR.deploy(10);
    await br.deployed();
    console.log("BR deployed to:", br.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });