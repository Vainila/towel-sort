module.exports = function towelSort (matrix) {
  if(matrix == undefined || matrix[0]==undefined)return [];
    
  for(let i = 0; i<matrix.length;i++){
    if(i%2==1){matrix[i].sort((a,b)=>b-a);}
  }
  return matrix.join(",").split(",");
}