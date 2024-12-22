import {useLoading} from "@/contexts/LoadingContext";
import LoadFullScreen from "@/components/load/FullScreen";
import * as React from "react";
import {ReactNode, useEffect, useState} from "react";

export default function LoadContextHelper() {
  const {messages} = useLoading();
  const [isLoading,setIsLoading] = useState(false)
  const [message,setMessage] = useState<ReactNode>(null)

  useEffect(() => {
      if (messages.length > 0) {
        setIsLoading(true)
        setMessage(
          <div style={{marginTop: '20px'}}>
            {messages.map((message, index) => (
              <p key={index} style={{margin: 0}}>
                {message} ...
              </p>
            ))}
          </div>
        )
      }else{
        setIsLoading(false)
        setMessage(null)
      }
  }, [messages])

  return <LoadFullScreen isOpen={isLoading} message={message} />
}