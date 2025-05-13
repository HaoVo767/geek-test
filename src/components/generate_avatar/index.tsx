function GenerateAvatar({ name }: { name: string }) {
  const getAvatarUrl = (name: string) => {
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random&size=100`
  }
  return (
    <img
      src={getAvatarUrl(name)}
      alt={name}
      style={{ borderRadius: "50%" }}
    />
  )
}

export default GenerateAvatar
