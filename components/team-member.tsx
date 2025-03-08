import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

interface TeamMemberProps {
  name: string
  role: string
  bio: string
  imageSrc: string
}

export function TeamMember({ name, role, bio, imageSrc }: TeamMemberProps) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-square relative">
        <Image src={imageSrc || "/placeholder.svg"} alt={name} fill className="object-cover" />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-blue-600 mb-2">{role}</p>
        <p className="text-gray-500">{bio}</p>
      </CardContent>
    </Card>
  )
}

