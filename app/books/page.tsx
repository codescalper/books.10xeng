import * as React from "react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default function Books() {
    return (
        <div className="flex flex-col items-center ">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-20 lg:gap-40 mx-auto">
                <Card className="w-[300px] ">
                    <CardHeader>
                        <CardTitle className="flex justify-center">First Year</CardTitle>
                        <CardDescription className="flex justify-center">Computer Engineering</CardDescription>
                    </CardHeader>
                    <CardContent>

                    </CardContent>
                    <CardFooter className="flex justify-between">

                        <Button size={'lg'} >Sem 1</Button>
                        <Button size={'lg'} >Sem 2</Button>
                    </CardFooter>
                </Card>
                <Card className="w-[300px] ">
                    <CardHeader>
                        <CardTitle className="flex justify-center">Second Year</CardTitle>
                        <CardDescription className="flex justify-center">Computer Engineering</CardDescription>
                    </CardHeader>
                    <CardContent>

                    </CardContent>
                    <CardFooter className="flex justify-between">

                        <Button size={'lg'} >Sem 3</Button>
                        <Button size={'lg'} >Sem 4</Button>
                    </CardFooter>
                </Card>
                <Card className="w-[300px] ">
                    <CardHeader>
                        <CardTitle className="flex justify-center">Third Year</CardTitle>
                        <CardDescription className="flex justify-center">Computer Engineering</CardDescription>
                    </CardHeader>
                    <CardContent>

                    </CardContent>
                    <CardFooter className="flex justify-between">

                        <Button size={'lg'} >Sem 5</Button>
                        <Button size={'lg'} >Sem 6</Button>
                    </CardFooter>
                </Card>
                <Card className="w-[300px] ">
                    <CardHeader>
                        <CardTitle className="flex justify-center">Fourth Year</CardTitle>
                        <CardDescription className="flex justify-center">Computer Engineering</CardDescription>
                    </CardHeader>
                    <CardContent>

                    </CardContent>
                    <CardFooter className="flex justify-between">

                        <Button size={'lg'} >Sem 7</Button>
                        <Button size={'lg'} >Sem 8</Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}
