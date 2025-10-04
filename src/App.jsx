import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Rocket, Shield, ChartLine, Exchange, Users, Wallet, Search } from 'lucide-react';

const ALL_TOKENS = [
  { id: "SEA", name: "UNIT SEA COIN", symbol: "SEACOIN", description: "$SEACOIN is a community passionate about sailing, yacht trips and tokenisation of the sea economy.", image: "https://raw.githubusercontent.com/unitecosystem/unitecosytem/main/sea.png", website: "https://sea.unit.network/coin", chain: "solana" },
  { id: "DEX", name: "UNIT DEX COIN", symbol: "DEXCOIN", description: "Preparing for the DEX Launch for UnitCoin", image: "https://raw.githubusercontent.com/unitecosystem/unitecosytem/main/DEXCoin512.png", website: "https://dex.unit.network/coin", chain: "solana" },
  { id: "INVESTOR", name: "UNIT INVESTOR COIN", symbol: "INVESTCOIN", description: "Powering the Investor Economy on Unit Network. Back the Builders. Own the Future.", image: "https://raw.githubusercontent.com/unitecosystem/unitecosytem/main/InvestorCoin512.png", website: "https://investor.unit.network/coin", chain: "solana" },
  { id: "TICKET", name: "UNIT TICKET COIN", symbol: "TICKETCOIN", description: "$TICKETCOIN — A decentralized platform where people create, sell, and discover events on-chain.", image: "https://raw.githubusercontent.com/unitecosystem/unitecosytem/main/TicketCoin512.png", website: "https://ticket.unit.network/coin", chain: "solana" },
  { id: "SKI", name: "UNIT SKI COIN", symbol: "SKICOIN", description: "Powering the Ski Token Economy on Unit Network", image: "https://raw.githubusercontent.com/unitecosystem/unitecosytem/main/SkiCoin512.png", website: "https://ski.unit.network/coin", chain: "solana" },
  { id: "SHOP", name: "UNIT SHOP COIN", symbol: "SHOPCOIN", description: "Decentralised E-Commerce Shop Platform on Unit Network", image: "https://raw.githubusercontent.com/unitecosystem/unitecosytem/main/ShopCoin512.png", website: "https://shop.unit.network/coin", chain: "solana" },
  { id: "DREAM", name: "UNIT DREAM COIN", symbol: "DREAMCOIN", description: "Decentralised Bucket List Social Network on Unit Network", image: "https://raw.githubusercontent.com/unitecosystem/unitecosytem/main/Dream512.png", website: "https://dream.unit.network/coin", chain: "solana" },
  { id: "STAY", name: "UNIT STAY COIN", symbol: "STAYCOIN", description: "Decentralised Short & Long Term Stay Platform on Unit Network", image: "https://raw.githubusercontent.com/unitecosystem/unitecosytem/main/Staycoin512.png", website: "https://stay.unit.network/coin", chain: "solana" },
  { id: "WORK", name: "UNIT WORK COIN", symbol: "WORKCOIN", description: "Decentralised Work Platform on Unit Network", image: "https://raw.githubusercontent.com/unitecosystem/unitecosytem/main/WorkCoin512.png", website: "https://work.unit.network/coin", chain: "solana" },
  { id: "LEARN", name: "UNIT LEARN COIN", symbol: "LEARNCOIN", description: "Decentralised Education Platform on Unit Network", image: "https://raw.githubusercontent.com/unitecosystem/unitecosytem/main/Learn.png", website: "https://learn.unit.network/coin", chain: "solana" },
  { id: "CREWCOIN", name: "UNIT CREW COIN", symbol: "CREWCOIN", description: "Decentralized Community Group App on Unit Network. Curate, Connect, Own.", image: "https://raw.githubusercontent.com/unitecosystem/unitecosytem/main/Crew.png", website: "https://crew.unit.network/coin", chain: "solana" },
  { id: "INTERVIEW", name: "UNIT INTERVIEW COIN", symbol: "VIEWCOIN", description: "On-Chain Conversations with Off-the-Charts Potential", image: "https://raw.githubusercontent.com/unitecosystem/unitecosytem/main/interview.png", website: "https://interview.unit.network/coin", chain: "solana" },
  { id: "SCREENER", name: "UNIT SCREENER COIN", symbol: "SCREENCOIN", description: "Tracking the Token Economy", image: "https://raw.githubusercontent.com/unitecosystem/unitecosytem/main/screener.png", website: "https://screener.unit.network/coin", chain: "solana" },
  { id: "HONGKONG", name: "UNIT HONG KONG COIN", symbol: "HKCOIN", description: "Powering the Hong Kong Token Economy on Unit Network", image: "https://raw.githubusercontent.com/unitecosystem/unitecosytem/main/hk512.png", website: "https://hongkong.unit.network/coin", chain: "solana" },
  { id: "TOKYO", name: "UNIT TOKYO COIN", symbol: "TOKYOCOIN", description: "Powering the Tokyo Token Economy on Unit Network", image: "https://raw.githubusercontent.com/unitecosystem/unitecosytem/main/tokyo512.png", website: "https://tokyo.unit.network/coin", chain: "solana" },
  { id: "ZURICH", name: "UNIT ZURICH COIN", symbol: "ZURICHCOIN", description: "Powering the Zurich Token Economy on Unit Network", image: "https://raw.githubusercontent.com/unitecosystem/unitecosytem/main/zurich512.png", website: "https://zurich.unit.network/coin", chain: "solana" },
  { id: "ABUDHABI", name: "UNIT ABU DHABI COIN", symbol: "AUHCOIN", description: "Powering the AbuDhabi Token Economy on Unit Network", image: "https://raw.githubusercontent.com/unitecosystem/Unit-Ecosystem/main/ABUDHABI/abudhabi512.png", website: "https://abudhabi.unit.network/coin", chain: "solana" },
  { id: "DUBAI", name: "UNIT DUBAI COIN", symbol: "DUBAICOIN", description: "Powering the Dubai Token Economy on Unit Network", image: "https://raw.githubusercontent.com/unitecosystem/UnitDubaiLaunch/main/Dubai512.png", website: "https://dubai.unit.network/coin", chain: "solana" },
  { id: "NEWYORK", name: "UNIT NEW YORK COIN", symbol: "NEWYORKCOIN", description: "Powering the New York Token Economy on Unit Network", image: "https://raw.githubusercontent.com/unitecosystem/Unit-Ecosystem/main/NEWYORK/newyork512.png", website: "https://newyork.unit.network/coin", chain: "solana" },
  { id: "LONDON", name: "UNIT LONDON COIN", symbol: "LONDONCOIN", description: "Powering the London Token Economy on Unit Network", image: "https://raw.githubusercontent.com/unitecosystem/Unit-Ecosystem/main/LONDON/london512.png", website: "https://london.unit.network/coin", chain: "solana" },
  { id: "MIAMI", name: "UNIT MIAMI COIN", symbol: "MIAMICOIN", description: "Powering the Miami Token Economy on Unit Network", image: "https://raw.githubusercontent.com/unitecosystem/Unit-Ecosystem/main/MIAMI/miami512.png", website: "https://miami.unit.network/coin", chain: "solana" },
  { id: "DOG", name: "UNIT DOG COIN", symbol: "DOGCOIN", description: "A decentralized platform connecting dog lovers, breeders, brands, and rescue communities worldwide.", image: "https://raw.githubusercontent.com/unitecosystem/Unit-Ecosystem/main/DOG/dog512.png", website: "https://dog.unit.network/coin", chain: "solana" },
  { id: "SANFRANCISCO", name: "UNIT SAN FRANCISCO COIN", symbol: "SFOCOIN", description: "Powering the San Francisco Token Economy on Unit Network", image: "https://raw.githubusercontent.com/unitecosystem/Unit-Ecosystem/main/SANFRANCISCO/sfo512.png", website: "https://sanfrancisco.unit.network/coin", chain: "solana" },
  { id: "LOSANGELES", name: "UNIT LOS ANGELES COIN", symbol: "LAXCOIN", description: "Powering the LA Token Economy on Unit Network", image: "https://raw.githubusercontent.com/unitecosystem/Unit-Ecosystem/main/LOSANGELES/lax512.png", website: "https://losangeles.unit.network/coin", chain: "solana" },
  { id: "SOLAR", name: "UNIT SOLAR COIN", symbol: "SOLARCOIN", description: "A decentralized platform for funding, building, and owning solar energy projects worldwide.", image: "https://raw.githubusercontent.com/unitecosystem/unitecosytem/main/solar.png", website: "https://solar.unit.network/coin", chain: "solana" },
  { id: "ASIANCOIN", name: "UNIT ASIAN COIN", symbol: "ASIANCOIN", description: "Powering the Asian community globally", image: "https://raw.githubusercontent.com/unitecosystem/unitecosytem/main/Asian.png", website: "https://asian.unit.network/coin", chain: "solana" },
  { id: "BLACKCOIN", name: "UNIT BLACK COIN", symbol: "BLACKCOIN", description: "$BLACKCOIN is the digital token of Black excellence — supporting entrepreneurs, artists, and communities across Africa, the Americas, the Caribbean, and the world.", image: "https://raw.githubusercontent.com/unitecosystem/unitecosytem/main/Black.png", website: "https://black.unit.network/coin", chain: "solana" },
  { id: "SKY", name: "UNIT SKY COIN", symbol: "SKYCOIN", description: "Powering the Sky, Airplane and Space Token Economy on Unit Network", image: "https://raw.githubusercontent.com/unitecosystem/unitecosytem/main/sky.png", website: "https://sky.unit.network/coin", chain: "solana" },
  { id: "UNIVERSITY", name: "UNIT UNIVERSITY COIN", symbol: "UNICOIN", description: "Powering the University Token Economy on Unit Network", image: "https://raw.githubusercontent.com/unitecosystem/unitecosytem/main/university.png", website: "https://university.unit.network/coin", chain: "solana" },
  { id: "CATCOIN", name: "UNIT CAT COIN", symbol: "CATCOIN", description: "A decentralized platform for cat lovers, breeders, rescues, and collectors to connect and build on-chain.", image: "https://raw.githubusercontent.com/unitecosystem/unitecosytem/main/Cat.png", website: "https://cat.unit.network/coin", chain: "solana" },
  { id: "CONNECTCOIN", name: "UNIT CONNECT COIN", symbol: "CONNECTCOIN", description: "Decentralised Friendship, Dating, Businesses Networking App on Unit Network", image: "https://raw.githubusercontent.com/unitecosystem/unitecosytem/main/connect.png", website: "https://connect.unit.network/coin", chain: "solana" },
  { id: "MUSIC", name: "UNIT MUSIC COIN", symbol: "MUSICCOIN", description: "Decentralised Music App and Music Token Economy on Unit Network", image: "https://raw.githubusercontent.com/unitecosystem/unitecosytem/main/music.png", website: "https://music.unit.network/coin", chain: "solana" },
  { id: "CHATCOIN", name: "UNIT CHAT COIN", symbol: "CHATCOIN", description: "Decentralised Chat App on Unit Network", image: "https://raw.githubusercontent.com/unitecosystem/unitecosytem/main/Chat.png", website: "https://chat.unit.network/coin", chain: "solana" },
  { id: "POKER", name: "UNIT POKER COIN", symbol: "POKERCOIN", description: "Decentralised Poker App on Unit Network", image: "https://raw.githubusercontent.com/unitecosystem/unitecosytem/main/poker.png", website: "https://poker.unit.network/coin", chain: "solana" },
  { id: "AUCTCOIN", name: "UNIT AUCTION COIN", symbol: "AUCTIONCOIN", description: "Decentralised Auction App on Unit Network", image: "https://raw.githubusercontent.com/unitecosystem/unitecosytem/main/Auction.png", website: "https://auction.unit.network/coin", chain: "solana" },
  { id: "SHANGHAI", name: "UNIT SHANGHAI COIN", symbol: "SHACOIN", description: "Web3 Lives Here. The Decentralized Shanghai Token on Unit Network.", image: "https://raw.githubusercontent.com/unitecosystem/Unit-Ecosystem/main/SHANGHAI/shanghai512.png", website: "https://shanghai.unit.network/coin", chain: "solana" },
  { id: "SINGAPORE", name: "UNIT SINGAPORE COIN", symbol: "SGPCOIN", description: "Powering the Singapore Token Economy on Unit Network", image: "https://raw.githubusercontent.com/unitecosystem/Unit-Ecosystem/main/SINGAPORE/sg512.png", website: "https://singapore.unit.network/coin", chain: "solana" },
  { id: "SEOUL", name: "UNIT SEOUL COIN", symbol: "SEOULCOIN", description: "Powering the Seoul Token Economy on Unit Network", image: "https://raw.githubusercontent.com/unitecosystem/Unit-Ecosystem/main/SEOUL/seoul512.png", website: "https://seoul.unit.network/coin", chain: "solana" },
  { id: "JAKARTA", name: "UNIT JAKARTA COIN", symbol: "JKTCOIN", description: "Jakarta, On-Chain. The Decentralized City Token on Unit Network.", image: "https://raw.githubusercontent.com/unitecosystem/Unit-Ecosystem/main/JAKARTA/jkt512.png", website: "https://jakarta.unit.network/coin", chain: "solana" },
  { id: "SYDNEY", name: "UNIT SYDNEY COIN", symbol: "SYDNEYCOIN", description: "A decentralized city token capturing the innovation, lifestyle, and global energy of Australia’s most iconic city.", image: "https://raw.githubusercontent.com/unitecosystem/Unit-Ecosystem/main/SYDNEY/sydney512.png", website: "https://sydney.unit.network/coin", chain: "solana" },
  { id: "MADRID", name: "UNIT MADRID COIN", symbol: "MADRIDCOIN", description: "Madrid, Tokenized. Where Heritage Meets Innovation.", image: "https://raw.githubusercontent.com/unitecosystem/unitecosytem/main/madrid.png", website: "https://madrid.unit.network/coin", chain: "solana" },
  { id: "PARIS", name: "UNIT PARIS COIN", symbol: "PARISCOIN", description: "Powering the Paris Token Economy on Unit Network", image: "https://raw.githubusercontent.com/unitecosystem/Unit-Ecosystem/main/PARIS/paris512.png", website: "https://paris.unit.network/coin", chain: "solana" },
  { id: "MEXICOCITY", name: "UNIT MEXICO COIN", symbol: "MEXICOCOIN", description: "Mexico, Tokenized. Where Tradition Fuels Innovation.", image: "https://raw.githubusercontent.com/unitecosystem/Unit-Ecosystem/main/MEXICOCITY/mex512.png", website: "https://mexicocity.unit.network/coin", chain: "solana" },
  { id: "RIO", name: "UNIT RIO COIN", symbol: "RIOCOIN", description: "Rio on the Blockchain. The City Token by Unit Network.", image: "https://raw.githubusercontent.com/unitecosystem/Unit-Ecosystem/main/RIO/rio512.png", website: "https://rio.unit.network/coin", chain: "solana" },
  { id: "SAOPAULO", name: "UNIT SAO PAULO COIN", symbol: "SAOCOIN", description: "São Paulo, Tokenized. The Decentralized City Token by Unit Network.", image: "https://raw.githubusercontent.com/unitecosystem/Unit-Ecosystem/main/SAOPAULO/sao512.png", website: "https://saopaulo.unit.network/coin", chain: "solana" },
  { id: "BIKECOIN", name: "UNIT BIKE COIN", symbol: "BIKECOIN", description: "Bike, Tokenized. The Decentralized Movement Token by Unit Network", image: "https://raw.githubusercontent.com/unitecosystem/Unit-Ecosystem/main/BIKE/bike512.png", website: "https://bike.unit.network/coin", chain: "solana" },
  { id: "GYM", name: "UNIT GYM COIN", symbol: "GYMCOIN", description: "Powering the Gym Token Economy on Unit Network", image: "https://raw.githubusercontent.com/unitecosystem/unitecosytem/main/Gym.png", website: "https://gym.unit.network/coin", chain: "solana" },
  { id: "FOOTBALL", name: "UNIT FOOTBALL COIN", symbol: "BALLCOIN", description: "Powering the Football Token Economy on Unit Network", image: "https://raw.githubusercontent.com/unitecosystem/unitecosytem/main/football.png", website: "https://football.unit.network/coin", chain: "solana" },
  { id: "YOGA", name: "UNIT YOGA COIN", symbol: "YOGACOIN", description: "Powering the Yoga Token Economy on Unit Network", image: "https://raw.githubusercontent.com/unitecosystem/unitecosytem/main/yoga512.png", website: "https://yoga.unit.network/coin", chain: "solana" },
  { id: "RUN", name: "UNIT RUN COIN", symbol: "RUNCOIN", description: "Powering the Running Token Economy on Unit Network", image: "https://raw.githubusercontent.com/unitecosystem/unitecosytem/main/run.png", website: "https://run.unit.network/coin", chain: "solana" },
  { id: "INFLUENCER", name: "UNIT INFLUENCER COIN", symbol: "INFLCOIN", description: "Influence, Tokenized. The Decentralized Creator Economy Token by Unit Network.", image: "https://raw.githubusercontent.com/unitecosystem/unitecosytem/main/influencer.png", website: "https://influencer.unit.network/COIN", chain: "solana" },
  { id: "SCHOOL", name: "UNIT SCHOOL COIN", symbol: "SCHOOLCOIN", description: "Education, Tokenized. The Decentralized Learning Economy Token by Unit Network.", image: "https://raw.githubusercontent.com/unitecosystem/unitecosytem/main/school.png", website: "https://school.unit.network/coin", chain: "solana" },
  { id: "MOVIE", name: "UNIT MOVIE COIN", symbol: "MOVIECOIN", description: "Powering the Movie Token Economy on Unit Network", image: "https://raw.githubusercontent.com/unitecosystem/unitecosytem/main/movie512.png", website: "https://movie.unit.network/coin", chain: "solana" },
  { id: "PARTY", name: "UNIT PARTY COIN", symbol: "PARTYCOIN", description: "Powering the Partying Token Economy on Unit Network", image: "https://raw.githubusercontent.com/unitecosystem/unitecosytem/main/party512.png", website: "https://party.unit.network/coin", chain: "solana" },
  { id: "MODEL", name: "UNIT MODEL COIN", symbol: "MODELCOIN", description: "Powering the Model Token Economy on Unit Network", image: "https://raw.githubusercontent.com/unitecosystem/Unit-Ecosystem/main/MODEL/model512.png", website: "https://model.unit.network/coin", chain: "solana" },
  { id: "JEWISH", name: "UNIT JEWISH COIN", symbol: "JEWISHCOIN", description: "Heritage, Tokenized. The Decentralized Jewish Community Token by Unit Network.", image: "https://raw.githubusercontent.com/unitecosystem/unitecosytem/main/jewish.png", website: "https://jewish.unit.network/coin", chain: "solana" },
  { id: "LATINO", name: "UNIT LATINO COIN", symbol: "LATINOCOIN", description: "A decentralized platform connecting Latino communities, culture, and creativity across the world.", image: "https://raw.githubusercontent.com/unitecosystem/unitecosytem/main/latino.png", website: "https://latino.unit.network/coin", chain: "solana" },
  { id: "ARABCOIN", name: "UNIT ARAB COIN", symbol: "ARABCOIN", description: "A Digital Currency for the Arab World.", image: "", website: "https://arab.unit.network/coin", chain: "solana" },
  { id: "INDIAN", name: "UNIT INDIAN COIN", symbol: "INDIANCOIN", description: "India’s Voice, On-Chain. One Nation. One Coin. Infinite Possibility.", image: "", website: "https://indian.unit.network/coin", chain: "solana" },
  { id: "AKIYACOIN", name: "UNIT AKIYA COIN", symbol: "AKIYACOIN", description: "A decentralized platform to fund, restore, and reimagine abandoned homes and communities across Japan.", image: "https://raw.githubusercontent.com/unitecosystem/unitecosytem/main/Akiya.png", website: "https://akiya.unit.network/coin", chain: "solana" },
  { id: "STATUS", name: "UNIT STATUS COIN", symbol: "STATUSCOIN", description: "A decentralized platform to build, showcase, and own your reputation and influence on-chain.", image: "https://raw.githubusercontent.com/unitecosystem/unitecosytem/main/status.png", website: "https://status.unit.network/coin", chain: "solana" },
  { id: "ADVERTCOIN", name: "UNIT ADVERT COIN", symbol: "ADVERTCOIN", description: "A decentralized platform reshaping how brands, creators, and communities connect and promote across Web3.", image: "https://raw.githubusercontent.com/unitecosystem/unitecosytem/main/Advert.png", website: "https://advert.unit.network/coin", chain: "solana" },
  { id: "BRIDGECOIN", name: "UNIT BRIDGE COIN", symbol: "BRIDGECOIN", description: "BRIDGECOIN the link to cross chain", image: "https://raw.githubusercontent.com/unitecosystem/unitecosytem/main/Bridge.png", website: "https://bridge.unit.network/coin", chain: "solana" },
  { id: "DRIVE", name: "UNIT DRIVE COIN", symbol: "DRIVECOIN", description: "Drive Direct. Save More. Book on Your Terms — Powered by $DRIVECOIN", image: "https://raw.githubusercontent.com/unitecosystem/unitecosytem/main/Drive.png", website: "https://drive.unit.network/coin", chain: "solana" },
  { id: "PREDICT", name: "UNIT PREDICT COIN", symbol: "PREDCOIN", description: "A decentralized platform connecting forecasters, data communities, and markets across Web3 and beyond.", image: "https://raw.githubusercontent.com/unitecosystem/unitecosytem/main/predict.png", website: "https://predict.unit.network/coin", chain: "solana" },
  { id: "CHESSCOIN", name: "UNIT CHESS COIN", symbol: "CHESSCOIN", description: "A decentralized platform connecting players, tournaments, and chess communities across Web3 and beyond.", image: "https://raw.githubusercontent.com/unitecosystem/unitecosytem/main/Chess.png", website: "https://chess.unit.network/coin", chain: "solana" },
  { id: "BONDCOIN", name: "UNIT BOND COIN", symbol: "BONDCOIN", description: "A decentralized platform connecting investors, issuers, and communities across Web3 and beyond.", image: "https://raw.githubusercontent.com/unitecosystem/unitecosytem/main/Bonds.png", website: "https://bond.unit.network/coin", chain: "solana" },
  { id: "PEOPLE", name: "UNIT PEOPLE COIN", symbol: "PEOPLECOIN", description: "Powering the People Token Economy on Unit Network", image: "https://raw.githubusercontent.com/unitecosystem/unitecosytem/main/people.png", website: "https://people.unit.network/coin", chain: "solana" },
  { id: "AICOIN", name: "UNIT AI COIN", symbol: "AICOIN", description: "Powering the AI Token Economy on Unit Network", image: "https://raw.githubusercontent.com/unitecosystem/unitecosytem/main/AI.png", website: "https://ai.unit.network/coin", chain: "solana" },
  { id: "SWAP", name: "UNIT SWAP COIN", symbol: "SWAPCOIN", description: "A decentralized platform connecting traders, liquidity providers, and swap markets across Web3 and beyond.", image: "https://raw.githubusercontent.com/unitecosystem/unitecosytem/main/swap.png", website: "https://swap.unit.network/coin", chain: "solana" },
  { id: "MOSCOW", name: "UNIT MOSCOW COIN", symbol: "MOSCOWCOIN", description: "A decentralized platform connecting citizens, businesses, and communities across Web3 and beyond.", image: "https://raw.githubusercontent.com/unitecosystem/Unit-Ecosystem/main/MOSCOW/moscow512.png", website: "https://moscow.unit.network/coin", chain: "solana" },
  { id: "BERLINCOIN", name: "UNIT BERLIN COIN", symbol: "BERLINCOIN", description: "Powering the Berlin Token Economy on Unit Network", image: "https://raw.githubusercontent.com/unitecosystem/Unit-Ecosystem/main/BERLIN/berlin512.png", website: "https://berlin.unit.network/coin", chain: "solana" },
  { id: "RIYADH", name: "UNIT RIYADH COIN", symbol: "RIYADHCOIN", description: "A decentralized platform empowering Riyadh’s builders, dreamers, and global communities on-chain.", image: "https://raw.githubusercontent.com/unitecosystem/Unit-Ecosystem/main/RIYADH/riyadh512.png", website: "https://riyadh.unit.network/coin", chain: "solana" },
  { id: "MUMBAI", name: "UNIT MUMBAI COIN", symbol: "MUMBAICOIN", description: "A decentralized platform connecting Mumbai’s entrepreneurs, creators, and communities across Web3 and beyond.", image: "https://raw.githubusercontent.com/unitecosystem/Unit-Ecosystem/main/MUMBAI/mumbai512.png", website: "https://mumbai.unit.network/coin", chain: "solana" },
  { id: "CHICAGOCOIN", name: "UNIT CHICAGO COIN", symbol: "CHICAGOCOIN", description: "A decentralized platform connecting Chicago’s builders, creators, and communities across Web3 and beyond.", image: "https://raw.githubusercontent.com/unitecosystem/Unit-Ecosystem/main/CHICAGO/chicago512.png", website: "https://chicago.unit.network/coin", chain: "solana" },
  { id: "DELHI", name: "UNIT DELHI COIN", symbol: "DELHICOIN", description: "A decentralized platform connecting Delhi’s innovators, creators, and communities across Web3 and beyond.", image: "https://raw.githubusercontent.com/unitecosystem/Unit-Ecosystem/main/DELHI/delhi512.png", website: "https://delhi.unit.network/coin", chain: "solana" },
  { id: "ATLANTACOIN", name: "UNIT ATLANTA COIN", symbol: "ATLANTACOIN", description: "A decentralized platform connecting Atlanta’s creators, innovators, and communities across Web3 and beyond.", image: "https://raw.githubusercontent.com/unitecosystem/Unit-Ecosystem/main/ATLANTA/atlanta512.png", website: "https://atlanta.unit.network/coin", chain: "solana" },
  { id: "FOOD", name: "UNIT FOOD COIN", symbol: "FOODCOIN", description: "The Future of Food Is On-Chain.", image: "https://raw.githubusercontent.com/unitecosystem/unitecosytem/main/food512.png", website: "https://food.unit.network/coin", chain: "solana" },
  { id: "DRINK", name: "UNIT DRINK COIN", symbol: "DRINKCOIN", description: "The Future of Beverages, Bottled On-Chain.", image: "https://raw.githubusercontent.com/unitecosystem/unitecosytem/main/Drink.png", website: "https://drink.unit.network/coin", chain: "solana" },
  { id: "BOSTONCOIN", name: "UNIT BOSTON COIN", symbol: "BOSTONCOIN", description: "Tokenizing Boston’s Energy, Economy, and Identity.", image: "https://raw.githubusercontent.com/unitecosystem/Unit-Ecosystem/main/BOSTON/boston512.png", website: "https://boston.unit.network/coin", chain: "solana" },
  { id: "COFFEECOIN", name: "UNIT COFFEE COIN", symbol: "COFFEECOIN", description: "A decentralized platform connecting coffee growers, brands, and communities across Web3 and beyond.", image: "https://raw.githubusercontent.com/unitecosystem/unitecosytem/main/Coffee.png", website: "https://coffee.unit.network/coin", chain: "solana" },
  { id: "TORONTO", name: "UNIT TORONTO COIN", symbol: "TORONTOCOIN", description: "A decentralized platform connecting Toronto’s creators, builders, and communities across Web3 and beyond.", image: "https://raw.githubusercontent.com/unitecosystem/Unit-Ecosystem/main/TORONTO/toronto512.png", website: "https://toronto.unit.network/coin", chain: "solana" },
  { id: "NETWORKSTATE", name: "UNIT NETWORKSTATE COIN", symbol: "NSCOIN", description: "A decentralized platform connecting network cities, digital citizens, and global communities across Web3 and beyond.", image: "", website: "https://networkstate.unit.network/coin", chain: "solana" },
  { id: "AGENCYCOIN", name: "UNIT AGENCY COIN", symbol: "AGENCYCOIN", description: "Unleashing the Agency Economy — On-Chain.", image: "", website: "https://agency.unit.network/coin", chain: "solana" },
  { id: "ARTCOIN", name: "UNIT ART COIN", symbol: "ARTCOIN", description: "Liberating the Art World — One Token at a Time.", image: "https://raw.githubusercontent.com/unitecosystem/unitecosytem/main/Art.png", website: "https://art.unit.network/coin", chain: "solana" },
  { id: "HOMELESS", name: "UNIT HOMELESS COIN", symbol: "HMLCOIN", description: "End Homelessness, One Block at a Time.", image: "https://raw.githubusercontent.com/unitecosystem/unitecosytem/main/Home.png", website: "https://homeless.unit.network/coin", chain: "solana" },
  { id: "FOUNDER", name: "UNIT FOUNDER COIN", symbol: "FOUNDERCOIN", description: "Fueling the Founders of the Future.", image: "https://raw.githubusercontent.com/unitecosystem/unitecosytem/main/founder.png", website: "https://founder.unit.network/coin", chain: "solana" },
  { id: "FASHION", name: "UNIT FASHION COIN", symbol: "FASHIONCOIN", description: "Where Fashion Meets the Blockchain.", image: "https://raw.githubusercontent.com/unitecosystem/unitecosytem/main/fashion.png", website: "https://fashion.unit.network/coin", chain: "solana" },
  { id: "CHARITYCOIN", name: "UNIT CHARITY COIN", symbol: "CHARITYCOIN", description: "The Future of Giving Is On-Chain.", image: "https://raw.githubusercontent.com/unitecosystem/unitecosytem/main/Charity.png", website: "https://charity.unit.network/coin", chain: "solana" },
  { id: "HOTEL", name: "UNIT HOTEL COIN", symbol: "HOTELCOIN", description: "Decentralized Hospitality. Verified on the Blockchain.", image: "https://raw.githubusercontent.com/unitecosystem/unitecosytem/main/hotel.png", website: "https://hotel.unit.network/coin", chain: "solana" },
  { id: "WATCH", name: "UNIT WATCH COIN", symbol: "WATCHCOIN", description: "The Future of Time, Secured on the Blockchain.", image: "https://raw.githubusercontent.com/unitecosystem/unitecosytem/main/watch.png", website: "https://watch.unit.network/coin", chain: "solana" },
  { id: "CHURCHCOIN", name: "UNIT CHURCH COIN", symbol: "CHURCHCOIN", description: "Faith, Transparency, and Stewardship — On the Blockchain.", image: "", website: "https://church.unit.network/coin", chain: "solana" },
  { id: "PROPERTY", name: "UNIT PROPERTY COIN", symbol: "PROPCOIN", description: "The Future of Property Is Borderless and On-Chain.", image: "https://raw.githubusercontent.com/unitecosystem/unitecosytem/main/property.png", website: "https://property.unit.network/coin", chain: "solana" },
  { id: "CARCOIN", name: "UNIT CAR COIN", symbol: "CARCOIN", description: "The Automotive Economy, Rebuilt On-Chain.", image: "https://raw.githubusercontent.com/unitecosystem/unitecosytem/main/car512.png", website: "https://car.unit.network/coin", chain: "solana" },
  { id: "TAIPEI", name: "UNIT TAIPEI COIN", symbol: "TAIPEICOIN", description: "A decentralized platform connecting Taipei’s innovators, creators, and communities across Web3 and beyond.", image: "", website: "https://taipei.unit.network/coin", chain: "solana" },
  { id: "OSAKA", name: "UNIT OSAKA COIN", symbol: "OSAKACOIN", description: "Osaka’s Economy, Reimagined for a Global Future.", image: "", website: "https://osaka.unit.network/coin", chain: "solana" },
  { id: "BKKCOIN", name: "UNIT BANGKOK COIN", symbol: "BKKCOIN", description: "Bangkok, Tokenized. The Currency of Thailand’s Digital Capital.", image: "https://raw.githubusercontent.com/unitecosystem/Unit-Ecosystem/main/BANGKOK/bkk512.png", website: "https://bangkok.unit.network/coin", chain: "solana" },
  { id: "BEIJINGCOIN", name: "UNIT BEIJING COIN", symbol: "BEIJINGCOIN", description: "Beijing, Powered by the Blockchain.", image: "https://raw.githubusercontent.com/unitecosystem/Unit-Ecosystem/main/BEIJING/beijing512.png", website: "https://beijing.unit.network/coin", chain: "solana" },
  { id: "MANILA", name: "UNIT MANILA COIN", symbol: "MANILACOIN", description: "Reimagining Manila’s Economy — One Token at a Time.", image: "", website: "https://manila.unit.network/coin", chain: "solana" },
  { id: "KUALALUMPUR", name: "UNIT KL COIN", symbol: "KLCOIN", description: "Kuala Lumpur’s Digital Economy, Now Tokenized.", image: "https://raw.githubusercontent.com/unitecosystem/Unit-Ecosystem/main/KUALALUMPUR/kl512.png", website: "https://kualalumpur.unit.network/coin", chain: "solana" }
];

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [connectedWallet, setConnectedWallet] = useState(null);
  const [showWalletModal, setShowWalletModal] = useState(false);

  const filteredTokens = ALL_TOKENS.filter(token => 
    token.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    token.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleConnectWallet = (chain) => {
    if (chain === 'unit') {
      window.open('https://app.unit.network', '_blank');
    }
    setConnectedWallet({ chain, address: 'Connected' });
    setShowWalletModal(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* HEADER */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg flex items-center justify-center">
              <Rocket className="w-6 h-6" />
            </div>
            <span className="text-2xl font-bold">minttoken.fun</span>
          </div>
          <button 
            onClick={() => setShowWalletModal(true)}
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-teal-500 flex items-center space-x-2"
          >
            <Wallet className="w-4 h-4" />
            <span>{connectedWallet ? 'Connected' : 'Connect Wallet'}</span>
          </button>
        </nav>
      </header>

      {/* WALLET MODAL */}
      {showWalletModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-slate-800 rounded-2xl p-6 w-full max-w-md">
            <h3 className="text-xl font-bold mb-4">Connect Wallet</h3>
            {['solana', 'base', 'bsc', 'sui', 'ton', 'unit'].map(chain => (
              <button
                key={chain}
                onClick={() => handleConnectWallet(chain)}
                className="w-full p-3 bg-slate-700 hover:bg-slate-600 rounded-lg mb-2 text-left"
              >
                {chain.toUpperCase()}
              </button>
            ))}
            <button onClick={() => setShowWalletModal(false)} className="w-full mt-4">
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* HERO */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Launch Your Token in <span className="text-teal-400">Minutes</span></h1>
          <p className="text-gray-300 mb-8">Professional token creation platform with enterprise-grade security and multichain support.</p>
          
          {/* Token Creation Form */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto border border-slate-700">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Token Name</label>
                  <input type="text" placeholder="Project Token" className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Token Symbol</label>
                  <input type="text" placeholder="PRJ" className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none" maxLength="10" />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Total Supply</label>
                  <input type="number" placeholder="1,000,000" className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Decimals</label>
                  <select className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none">
                    <option>18</option>
                    <option>9</option>
                    <option>6</option>
                    <option>3</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-400 mb-2">Token Logo (Optional)</label>
                <div className="bg-slate-700 border-2 border-dashed border-slate-600 rounded-lg flex items-center justify-center h-32 cursor-pointer">
                  <span className="text-gray-400">Upload logo (PNG, JPG, SVG)</span>
                </div>
              </div>
              
              <button className="w-full bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 rounded-lg font-semibold py-4 transition-all">
                <Rocket className="w-5 h-5 inline mr-2" />
                LAUNCH TOKEN
              </button>
              
              <div className="grid grid-cols-3 gap-4 mt-6 text-sm text-gray-400">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-teal-400 rounded-full mr-2"></span>
                  <span>Audited Contracts</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-teal-400 rounded-full mr-2"></span>
                  <span>Auto Liquidity</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-teal-400 rounded-full mr-2"></span>
                  <span>Multichain</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recently Launched Projects */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Recently Launched Projects</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              100+ tokens launched across the Unit Network ecosystem
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {filteredTokens.slice(0, 3).map((token, index) => (
              <div
                key={token.id}
                className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500/30 transition-all cursor-pointer"
                onClick={() => window.open(token.website, '_blank')}
              >
                <div className="flex items-center space-x-3 mb-4">
                  {token.image ? (
                    <img src={token.image} alt={token.symbol} className="w-10 h-10 rounded-full object-cover" />
                  ) : (
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center">
                      <span className="font-bold text-white text-sm">{token.symbol.substring(0, 2)}</span>
                    </div>
                  )}
                  <div>
                    <h3 className="font-bold">{token.name}</h3>
                    <p className="text-sm text-gray-400">{token.symbol}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span className="flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-1"></span>
                    Solana
                  </span>
                  <span>Live</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-500">© 2025 minttoken.fun • Professional Token Launch Platform</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
