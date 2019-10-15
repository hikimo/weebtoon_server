exports.show = (req, res) => {
  res.send({status: 'success', data: { id: req.params.id}})
} 