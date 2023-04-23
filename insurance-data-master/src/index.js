let filteredData = [
    '38, male, 19.3, 0, yes, southwest, 15820.699',
    '39, female, 19.3, 2, no, southwest, 18820.699',
    '40, female, 19.3, 0, yes, northwest, 16000',
  ];

// //   const records = filteredData
// //   .map(line => line.split(','))
// //   .map(record => record[0]<40)
// //   .filter(record => {
// //     let value = record.split(',');
// //     return value[1]=== 'female' && value[5] === 'southwest';
// //   });
const femaleCandidatesSouthwest = filteredData.filter(record => {
    const values = record.split(',');
    return (values[1]).trim() === 'female' && (values[5]).trim() === 'southwest';
  });
  console.log(femaleCandidatesSouthwest);

// const filteredData = [
//     '38, male, 19.3, 0, yes, southwest, 15820.699',
//     '39, female, 19.3, 2, no, southwest, 18820.699',
//     '40, female, 19.3, 0, yes, northwest, 16000',
//   ];
  
//   console.log('Original data:');
//   console.log(filteredData);
  
//   const femaleCandidatesSouthwest = filteredData.filter(record => {
//     const values = record.split(',');
//     return (values[1]).trim() === 'female' && values[5].trim() === 'southwest';
//   });
  
//   console.log('Filtered data:');
//   console.log(femaleCandidatesSouthwest);